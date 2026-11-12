import { beforeEach, describe, expect, test } from "bun:test";
import { canTrack, readChoice, saveChoices } from "./consent";

let saved = new Map<string, string>();
beforeEach(() => {
  saved = new Map();
  Object.defineProperty(globalThis, "localStorage", { configurable: true, value: {
    getItem: (key: string) => saved.get(key) ?? null,
    setItem: (key: string, value: string) => saved.set(key, value),
  } });
  Object.defineProperty(globalThis, "navigator", { configurable: true, value: { globalPrivacyControl: false } });
  Object.defineProperty(globalThis, "window", { configurable: true, value: { dispatchEvent: () => true, gtag: () => {} } });
});

describe("cookie choices", () => {
  test("Reject all denies analytics", async () => {
    saveChoices({ analytics: "denied" });
    expect(await canTrack("analytics")).toBe(false);
  });
  test("Accept all grants analytics", async () => {
    saveChoices({ analytics: "granted" });
    expect(await canTrack("analytics")).toBe(true);
  });
  test("a later refusal replaces an acceptance", async () => {
    saveChoices({ analytics: "granted" });
    saveChoices({ analytics: "denied" });
    expect(await canTrack("analytics")).toBe(false);
  });
  test("Global Privacy Control overrides acceptance", async () => {
    saveChoices({ analytics: "granted" });
    Object.defineProperty(globalThis, "navigator", { configurable: true, value: { globalPrivacyControl: true } });
    expect(await canTrack("analytics")).toBe(false);
  });
  test("analytics permission does not grant advertising", () => {
    saveChoices({ analytics: "granted" });
    expect(readChoice("advertising")).toBe(null);
  });
});