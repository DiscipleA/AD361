# Learning Practice: Black-Box Testing, Part 2

## Application

**Name:** North Vacation Booking

The tests are based only on the provided requirements. No application code was reviewed.

## Reservation Requirements

- A reservation must be between 1 and 31 nights, inclusive.
- A reservation must include between 1 and 12 guests, inclusive.
- The reservation costs $200 per night.
- Every valid reservation includes a one-time $50 cleaning fee.
- Each guest over five costs an additional $25 per night.
- The check-in date must be before the checkout date.
- Every night in the requested date range must be available.
- Invalid reservation information raises a `ValueError`.
- An unavailable reservation raises an `UnavailableError`.
- A new valid reservation begins in the `Pending` state.
- Successful payment moves it from `Pending` to `Confirmed`.
- Failed payment moves it from `Pending` to `Cancelled`.
- A confirmed reservation can move to `Checked In` on its check-in date.
- A checked-in reservation moves to `Completed` after checkout.
- A pending or confirmed reservation may be cancelled.
- A cancelled or completed reservation cannot change states.
- Invalid state transitions raise an `InvalidStateError`.

## Step 1: Identify Conditions and Actions

### Conditions

- Dates are valid.
- Number of nights is valid.
- Number of guests is valid.
- Requested nights are available.
- More than five guests.

### Actions

- Create reservation.
- Calculate standard price.
- Add extra guest fee.
- Raise `ValueError`.
- Raise `UnavailableError`.

## Step 2: Create a Decision Table

`T` means true, `F` means false, `-` means the condition does not affect the result, and `X` means the action occurs.

| Conditions and Actions | Rule 1 | Rule 2 | Rule 3 | Rule 4 | Rule 5 | Rule 6 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Dates are valid | T | T | F | T | T | T |
| Number of nights is valid | T | T | - | F | T | T |
| Number of guests is valid | T | T | - | - | F | T |
| Requested nights are available | T | T | - | - | - | F |
| More than five guests | F | T | - | - | - | - |
| **Create reservation** | X | X | - | - | - | - |
| **Calculate standard price** | X | X | - | - | - | - |
| **Add extra guest fee** | - | X | - | - | - | - |
| **Raise `ValueError`** | - | - | X | X | X | - |
| **Raise `UnavailableError`** | - | - | - | - | - | X |

## Step 3: Create Decision Table Test Cases

| Test ID | Conditions | Input values | Expected action | Expected price or exception |
|---|---|---|---|---|
| TC01 | All valid; five or fewer guests | Nov. 10–13, 2026; 3 guests; all nights available | Create reservation | `$650` |
| TC02 | All valid; more than five guests | Nov. 10–13, 2026; 7 guests; all nights available | Create reservation | `$800` |
| TC03 | Invalid dates | Checkout is before check-in; 3 guests | Do not create reservation | `ValueError` |
| TC04 | Invalid number of nights | 32-night stay; 3 guests | Do not create reservation | `ValueError` |
| TC05 | Invalid number of guests | Nov. 10–13, 2026; 13 guests | Do not create reservation | `ValueError` |
| TC06 | Requested night unavailable | Nov. 11 unavailable; other nights available | Do not create reservation | `UnavailableError` |

## Step 4: Identify Reservation States and Events

### States

- `Pending`
- `Confirmed`
- `Checked In`
- `Completed`
- `Cancelled`

### Events

- Payment succeeds
- Payment fails
- Guest cancels
- Guest checks in
- Guest checks out

## Step 5: Create a State Transition Table

| Current State | Event | Expected State | Expected Result | Transition Type |
|---|---|---|---|---|
| Pending | Payment succeeds | Confirmed | Reservation is confirmed | Valid |
| Pending | Payment fails | Cancelled | Reservation is cancelled | Valid |
| Pending | Guest cancels | Cancelled | Reservation is cancelled | Valid |
| Confirmed | Guest checks in | Checked In | Guest is checked in | Valid |
| Confirmed | Guest cancels | Cancelled | Reservation is cancelled | Valid |
| Checked In | Guest checks out | Completed | Reservation is completed | Valid |
| Cancelled | Payment succeeds | Cancelled | `InvalidStateError` is raised | Invalid |
| Cancelled | Guest checks in | Cancelled | `InvalidStateError` is raised | Invalid |
| Completed | Guest cancels | Completed | `InvalidStateError` is raised | Invalid |

## Step 6: Create State Transition Test Cases

| Test ID | Starting State | Event | Expected State | Expected Result | Transition Type |
|---|---|---|---|---|---|
| ST01 | Pending | Payment succeeds | Confirmed | Reservation is confirmed | Valid |
| ST02 | Pending | Payment fails | Cancelled | Reservation is cancelled | Valid |
| ST03 | Pending | Guest cancels | Cancelled | Reservation is cancelled | Valid |
| ST04 | Confirmed | Guest checks in | Checked In | Guest is checked in | Valid |
| ST05 | Confirmed | Guest cancels | Cancelled | Reservation is cancelled | Valid |
| ST06 | Checked In | Guest checks out | Completed | Reservation is completed | Valid |
| ST07 | Cancelled | Payment succeeds | Cancelled | `InvalidStateError` is raised | Invalid |
| ST08 | Cancelled | Guest checks in | Cancelled | `InvalidStateError` is raised | Invalid |
| ST09 | Completed | Guest cancels | Completed | `InvalidStateError` is raised | Invalid |
| ST10 | Pending | Payment succeeds, guest checks in, guest checks out | Completed | Complete reservation sequence succeeds | Valid sequence |
| ST11 | Pending | Guest cancels | Cancelled | Cancellation sequence succeeds | Valid sequence |

## What to Submit

1. Create and initialize a GitHub repository.
2. Commit and push the completed `Readme.md`.
3. Make sure the repository is public.
4. Submit the repository URL on Canvas.

## AI Transparency

AI was used to organize the completed decision tables, state-transition tables, and test cases in Markdown.
