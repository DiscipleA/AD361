# LP03: Black-Box Testing, Part 1

## North Vacation Booking

Black-box testing means checking what an app should do without looking at its code. This practice uses the booking rules to plan tests. No app was provided, so these tests have not been run.

## Step 1: Identify the Equivalence Partitions

An equivalence partition is a group of inputs that follow the same rule. We choose one example from each group instead of testing every possible input.

### 1. Choose What to Test

- **Number of nights:** Is the stay long enough, but not too long?
- **Number of guests:** Is the guest count allowed, and does it add a fee?
- **Check-in and checkout dates:** Does the stay end after it starts?
- **Availability:** Is every requested night free to book?

### 2. Find the Allowed Values

A stay must be 1–31 nights with 1–12 guests. Check-in must be before checkout, and every reserved night must be available. Each night costs $200, plus one $50 cleaning fee. Each guest over five adds $25 per night.

### 3. Split the Values into Groups

Separate values that are too low, allowed, or too high. Split allowed guest counts into two groups because 1–5 guests have no extra guest fee, but 6–12 guests do. For dates, check correct order, matching dates, and reversed dates. For availability, check all nights available and at least one night unavailable.

### 4. Choose One Example from Each Group

The tables below show each group and its example. The test cases in Step 3 use these examples.

## Step 2: Create Equivalence Partition Tables

Each table heading names the classification being tested. “Accept” means the booking is allowed only when all other booking rules are also met.

### Number of Nights

| Partition | Rule | Example | Expected result |
| --- | --- | --- | --- |
| Invalid low | Less than 1 night | 0 nights | `ValueError` |
| Valid | 1–31 nights | 3 nights | Accept |
| Invalid high | More than 31 nights | 32 nights | `ValueError` |

### Number of Guests

| Partition | Rule | Example | Expected result |
| --- | --- | --- | --- |
| Invalid low | Less than 1 guest | 0 guests | `ValueError` |
| Valid, standard rate | 1–5 guests | 3 guests | Accept; no extra guest fee |
| Valid, extra fee | 6–12 guests | 7 guests | Accept; $25 per guest over five, per night |
| Invalid high | More than 12 guests | 13 guests | `ValueError` |

### Check-In and Checkout Dates

| Partition | Rule | Example | Expected result |
| --- | --- | --- | --- |
| Valid order | Check-in is before checkout | Nov. 10 → Nov. 13, 2026 | Accept |
| Invalid, same date | Check-in and checkout are the same | Nov. 10 → Nov. 10, 2026 | `ValueError` |
| Invalid, reversed | Check-in is after checkout | Nov. 13 → Nov. 10, 2026 | `ValueError` |

### Availability

| Partition | Rule | Example | Expected result |
| --- | --- | --- | --- |
| Available | Every reserved night is available | All three nights are available | Accept |
| Unavailable | At least one reserved night is unavailable | The middle night is unavailable | `UnavailableError` |

## Step 3: Write the Test Cases

Each table heading gives the **classification** for every case in that table. Each row gives the test ID, partition, input, and expected result.

**How to read the inputs:**

- Dates use `YYYY-MM-DD`. The arrow means check-in → checkout.
- All requested nights are available unless the case says otherwise.
- Nights are counted from check-in up to, but not including, checkout. For example, November 10 → November 13 is three nights: November 10, 11, and 12.
- `ValueError` means the booking information is invalid. `UnavailableError` means a requested night cannot be booked.

### Classification: Number of Nights

| Test ID | Partition | Input | Expected result |
| --- | --- | --- | --- |
| TC01 | Invalid low | `2026-11-10` → `2026-11-10`; 3 guests | 0 nights; `ValueError` |
| TC02 | Valid | `2026-11-10` → `2026-11-13`; 3 guests | Accept 3 nights; total $650 |
| TC03 | Invalid high | `2026-11-01` → `2026-12-03`; 3 guests | 32 nights; `ValueError` |

### Classification: Number of Guests

| Test ID | Partition | Input | Expected result |
| --- | --- | --- | --- |
| TC04 | Invalid low | `2026-11-10` → `2026-11-13`; 0 guests | `ValueError` |
| TC05 | Valid, standard rate | `2026-11-10` → `2026-11-13`; 3 guests | Accept; no extra guest fee; total $650 |
| TC06 | Valid, extra fee | `2026-11-10` → `2026-11-13`; 7 guests | Accept; $150 extra guest fee; total $800 |
| TC07 | Invalid high | `2026-11-10` → `2026-11-13`; 13 guests | `ValueError` |

### Classification: Check-In and Checkout Dates

| Test ID | Partition | Input | Expected result |
| --- | --- | --- | --- |
| TC08 | Valid order | `2026-11-10` → `2026-11-13`; 3 guests | Accept nights Nov. 10, 11, and 12, not Nov. 13; total $650 |
| TC09 | Invalid, same date | `2026-11-10` → `2026-11-10`; 3 guests | Same check-in and checkout date; `ValueError` |
| TC10 | Invalid, reversed | `2026-11-13` → `2026-11-10`; 3 guests | Check-in is after checkout; `ValueError` |

### Classification: Availability

| Test ID | Partition | Input | Expected result |
| --- | --- | --- | --- |
| TC11 | Available | `2026-11-10` → `2026-11-13`; 3 guests; Nov. 10, 11, and 12 available | Accept; total $650 |
| TC12 | Unavailable | `2026-11-10` → `2026-11-13`; 3 guests; Nov. 11 unavailable; other nights available | `UnavailableError` |

### Check the Prices

- **3 nights, 3 guests:** `(3 × $200) + $50 = $650`.
- **3 nights, 7 guests:** `(3 × $200) + (2 × $25 × 3) + $50 = $800`.

The cleaning fee is added once. With 7 guests, only the 2 guests over five add an extra nightly fee.

## Why This Needs Fewer Tests

Inputs in the same group follow the same rule. Testing 3 guests checks the no-extra-fee group, while testing 7 guests checks the extra-fee group. Choosing an example from every group lets us check the different rules without trying every possible booking.

## Reference

GeeksforGeeks. (2026, July 3). *Equivalence partitioning method*. https://www.geeksforgeeks.org/software-engineering/equivalence-partitioning-method/

## AI Transparency

AI was used to format the completed practice responses in Markdown for a clear, concise, and professional presentation.
