import { test } from "node:test";
import { strict as assert } from "node:assert";
import { products } from "./products";

test("BotNFlow is the primary commercial product", () => {
  assert.deepEqual(products.filter(product => product.status === "commercial").map(product => product.name), ["BotNFlow"]);
});
test("Renraku is planned, not commercially available", () => {
  assert.equal(products.find(product => product.name === "Renraku")?.status, "planned");
});
test("Onesi is planned, not commercially available", () => {
  assert.equal(products.find(product => product.name === "Onesi")?.status, "planned");
});