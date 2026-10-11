// Type the module variable; beforeEach loads its runtime implementation.
let receipt: typeof import("./fixed_receipt");

// Clear Jest's module cache, then reload fixed_receipt.ts to recreate the original list.
// This prevents additions or deletions in one test from affecting another.
beforeEach(() => {
  jest.resetModules();
  receipt = require("./fixed_receipt");
});
// Restore console.log after the receipt test replaces it with a recording spy.
afterEach(() => jest.restoreAllMocks());

// A $2 addition should raise the subtotal from $47.49 to $49.49.
// Assumption: total() returns the subtotal; toBeCloseTo() allows decimal imprecision.
test("Happy: adds an item", () => {
  receipt.addItem("apples", 2);
  expect(receipt.total()).toBeCloseTo(49.49, 2);
});

// Eggs are not last, so this catches an incorrect pop() that removes avocado oil.
// Check the remaining items and subtotal to verify both removal and preservation.
test("Happy: deletes the requested item", () => {
  expect(receipt.deleteItem("eggs")).toEqual([
    { name: "paper towels", price: 21.99 },
    { name: "sandwich", price: 8.75 },
    { name: "avocado oil", price: 10 }
  ]);
  expect(receipt.total()).toBeCloseTo(40.74, 2);
});

// Assumption: tax() returns only the tax amount, and 0.08 represents 8%.
// Calculate the expectation independently: 47.49 * 0.08 = 3.7992.
test("Happy: calculates tax", () => {
  expect(receipt.tax(0.08)).toBeCloseTo(3.7992, 4);
});

// Record console.log without printing; flat() collects its arguments into one array.
// arrayContaining checks the chosen item/total text but allows extra lines and any order.
test("Happy: prints a receipt", () => {
  const output = jest.spyOn(console, "log").mockImplementation(() => undefined);
  receipt.printReceipt(0.08);
  expect(output.mock.calls.flat()).toEqual(expect.arrayContaining([
    "paper towels : $21.99", "sandwich : $8.75",
    "eggs : $6.75", "avocado oil : $10.00",
    "Subtotal: $47.49", "Tax: $3.80", "Total: $51.29"
  ]));
});

// Assumption: negative prices are rejected; the callback lets toThrow() catch the error.
// Verify the original subtotal afterward to detect an unintended state change.
test("Unhappy: rejects a negative price", () => {
  expect(() => receipt.addItem("apples", -1)).toThrow();
  expect(receipt.total()).toBeCloseTo(47.49, 2);
});

// forEach passes each original item name to deleteItem(), creating an empty list.
// With no items, both the subtotal and tax should be zero, even at a nonzero rate.
test("Edge: handles an empty list", () => {
  ["paper towels", "sandwich", "eggs", "avocado oil"].forEach(receipt.deleteItem);
  expect(receipt.total()).toBe(0);
  expect(receipt.tax(0.08)).toBe(0);
});
