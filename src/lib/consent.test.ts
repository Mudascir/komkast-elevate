import { beforeEach, describe, test } from "node:test";
import { strict as assert } from "node:assert";
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
    assert.equal(await canTrack("analytics"), false);
  });
  test("Accept all grants analytics", async () => {
    saveChoices({ analytics: "granted" });
    assert.equal(await canTrack("analytics"), true);
  });
  test("a later refusal replaces an acceptance", async () => {
    saveChoices({ analytics: "granted" });
    saveChoices({ analytics: "denied" });
    assert.equal(await canTrack("analytics"), false);
  });
  test("Global Privacy Control overrides acceptance", async () => {
    saveChoices({ analytics: "granted" });
    Object.defineProperty(globalThis, "navigator", { configurable: true, value: { globalPrivacyControl: true } });
    assert.equal(await canTrack("analytics"), false);
  });
  test("analytics permission does not grant advertising", () => {
    saveChoices({ analytics: "granted" });
    assert.equal(readChoice("advertising"), null);
  });
});