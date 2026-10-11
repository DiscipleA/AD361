# Issue Log

Manual review of src/receipt.ts. Original source unchanged; receipt.test.ts defines the expected results.

## 1. Empty array slot
- Location: Line 12
- Issue: An extra comma creates an empty slot.
- Explanation: Iteration can encounter undefined instead of an item.
- Suggested fix: Remove the extra comma.
- Status: Fixed

## 2. Invalid item creation
- Location: Line 17
- Issue: Object properties use assignment syntax.
- Explanation: The invalid object prevents compilation and valid additions.
- Suggested fix: Use { name, price }.
- Status: Fixed

## 3. Wrong item deleted
- Location: Lines 22–23
- Issue: Incorrect lookup, unused idx, and unconditional pop().
- Explanation: Deleting eggs would remove avocado oil instead.
- Suggested fix: Find the supplied name with findIndex(), then splice() when found.
- Status: Fixed

## 4. Incorrect subtotal
- Location: Lines 28–31
- Issue: Iterates over a number, assigns to a function, and returns that function.
- Explanation: Does not calculate a numeric subtotal or handle an empty list.
- Suggested fix: Keep the loop; sum every item price into a numeric subtotal starting at 0, then return it.
- Status: Fixed

## 5. Incorrect tax calculation
- Location: Line 35
- Issue: Adds the tax rate instead of multiplying.
- Explanation: The tests expect the tax amount, not subtotal plus rate.
- Suggested fix: Return total() multiplied by taxRate.
- Status: Fixed

## 6. Incorrect receipt output
- Location: Lines 42–49
- Issue: Malformed strings, incorrect item references, and incorrect total expressions.
- Explanation: Compilation is blocked; correcting quotes alone will not correct the printed values.
- Suggested fix: Use matching backticks and each item's name/price; print total(), tax(taxRate), and their sum with two decimal places and the test's labels.
- Status: Fixed

## Test assumptions
Negative prices throw before changing the list, as assumed by the tests; the requirements do not specify this policy. Tax returns only the tax amount. Exact receipt labels and two-decimal formatting are chosen by the tests.

## Required examples
- Root cause hypothesis: The author may have confused object-property syntax with assignment syntax; their reasoning is unverified.
- Error: Using assignment syntax instead of property syntax when writing the object.
- Defect: The invalid object expression at line 17.
- Failure (observed): Jest reports six setup failures; assertions do not execute.
