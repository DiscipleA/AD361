// Program requirements:
// Items can be added to the grocery list.
// Items can be deleted from the grocery list.
// The subtotal is calculated without tax.
// The total is calculated with tax.
// A receipt can be printed.

const ITEMS = [
  { name: "paper towels", price: 21.99 },
  { name: "sandwich", price: 8.75 },
  { name: "eggs", price: 6.75 },
  // Fix 1: Remove the extra comma that created an empty slot.
  { name: "avocado oil", price: 10.0 },
];

export function addItem(name: string, price: number) {
  // Test assumption: Reject negative prices before changing the list.
  if (price < 0) throw new Error("Price cannot be negative.");

  // Fix 2: Use { name, price } instead of assignment syntax.
  const newItem = { name, price };
  ITEMS.push(newItem);
}

export function deleteItem(name: string) {
  // Fix 3: Find the supplied name, then remove that item rather than the last item.
  // Check for -1 so an unknown name does not remove an unrelated item.
  const idx = ITEMS.findIndex(item => item.name === name);
  if (idx !== -1) {
    ITEMS.splice(idx, 1);
  }
  return ITEMS;
}

export function total() {
  // Fix 4: Sum every item price into a numeric subtotal, starting at zero.
  // Iterate over ITEMS, not a number; an empty list returns zero.
  let subtotal = 0;
  for (const i of ITEMS) {
    subtotal = subtotal + i.price;
  }
  return subtotal;
}

export function tax(taxRate: number) {
  // Fix 5: Multiply the subtotal by the decimal rate to return only the tax amount.
  const tax = total() * taxRate;
  return tax;
}

export function printReceipt(taxRate: number) {
  console.log("************************");

  // Fix 6: Use backticks and each item's name/price instead of literal placeholders.
  for (const i of ITEMS) {
    console.log(`${i.name} : $${i.price.toFixed(2)}`);
  }

  console.log("************************");
  // Fix 6: Call total(), calculate tax(taxRate), and add them for the grand total.
  // Use matching backticks and the test's labels with two decimal places.
  console.log(`Subtotal: $${total().toFixed(2)}`);
  console.log(`Tax: $${tax(taxRate).toFixed(2)}`);
  console.log(`Total: $${(total() + tax(taxRate)).toFixed(2)}`);
}
