# Learning Practice: Experience-Based Testing

## Topics

- Error guessing
- Exploratory testing
- Checklist-based testing
- Acceptance testing

## Learning Objectives

By the end of this practice, you should be able to:

- Use your experience with similar websites to predict possible failures.
- Investigate a feature through a focused exploratory testing session.
- Create and perform a reusable testing checklist.
- Write acceptance criteria from an end user's perspective.
- Determine whether a feature satisfies its acceptance criteria.
- Record your testing clearly enough that another person can understand what you tested and what happened.

## Resources

- [What Is Acceptance Testing?](https://agilealliance.org/glossary/acceptance-testing/)
- [Applying BDD Acceptance Criteria in User Stories](https://www.thoughtworks.com/en-us/insights/blog/applying-bdd-acceptance-criteria-user-stories)

## Step 1: Error Guessing

Choose one feature of the `airbnb-clone-ts` application, such as creating or viewing a booking.

Based on your experience with similar websites, list **three things you think might go wrong**.

These are predictions based on your experience, knowledge, and instincts. You do not need to prove that they are defects at this point.

### Responses

Selected feature: Creating a booking.

1. A booking might be created with a required field left empty.
2. A booking might accept a guest count of zero or a negative number.
3. Selecting Confirm Booking twice might create duplicate bookings.

## Step 2: Exploratory Testing

Write a one-sentence **testing charter** describing what you want to investigate about your selected feature.

Testing charter: Explore creating a booking to see how the form handles missing information, invalid guest counts, and repeated confirmation.

Testing duration: 10–15 minutes of active exploration, excluding setup and pauses, as confirmed by the tester.

Spend **10 to 15 minutes** testing the feature. As you work, briefly record:

- What you tried
- What happened
- What you decided to investigate next

Your testing should remain focused on the goal described in your charter. If you discover a new area that you want to investigate, record it as an idea for a future testing session.


##Exploratory testing notes

| What I Tried | What Happened | What I Decided to Try Next |
| ------------ | ------------- | -------------------------- |
| Selected Beachfront Condo, entered `2026-11-10`, left guests at `1`, confirmed, and opened Bookings. | The booking details appeared correctly. Confirm was accidentally selected twice; this was not assessed as a duplicate-booking test. | Submit with the date empty while keeping the other fields valid. |
| Selected Beachfront Condo, left the date empty and guests at `1`, then selected Confirm Booking once. | The browser asked for the missing date and kept the form open. | Enter a date and try `0` guests. |
| Selected Beachfront Condo, entered `2026-11-10` and `0` guests, then selected Confirm Booking once. | The browser stated that the value must be greater than or equal to `1` and kept the form open. | Clear the guest count to check whether an empty value is also blocked. |
| Kept Beachfront Condo and `2026-11-10`, cleared the guest count, confirmed once, and opened Bookings. | A booking appeared with a blank guest count. | Try confirming a complete booking twice. |
| Selected Beachfront Condo, entered `2026-11-11` and `1` guest, selected Confirm Booking twice, then opened Bookings. | Two identical bookings appeared for November 11. | Review the observations against the testing charter. |



## Step 3: Checklist-Based Testing

Create a checklist containing at least **five checks** for the same feature.

You may use ideas from:

- Your error guesses
- Your exploratory testing session
- Problems you have experienced with similar applications
- Common usability or validation concerns

Perform each check and record one of the following results:

- **Passed**
- **Failed**
- **Unable to Test**

Include a brief note when a result needs additional explanation.

<details>
<summary>Checklist format</summary>

| Check | Result | Notes |
| ----- | ------ | ----- |
| A complete booking appears with the submitted rental, date, and guest count. | Passed | Beachfront Condo, `2026-11-10`, and `1` guest appeared correctly. |
| Submitting with an empty date is blocked. | Passed | The browser requested the missing date and kept the form open. |
| Submitting with `0` guests is blocked. | Passed | The browser required a value greater than or equal to `1`. |
| Submitting with an empty guest count is blocked. | Failed | A booking appeared with a blank guest count. |
| Selecting Confirm Booking twice for the same details creates only one booking. | Failed | Two identical bookings appeared for `2026-11-11` with `1` guest. |

</details>

## Step 4: Acceptance Testing

The previous steps approach the feature from a tester's perspective by predicting failures, exploring behavior, and completing specific checks.

Acceptance testing approaches the feature from the end user's perspective. It asks whether the feature allows the user to accomplish the goal it was created to support.

Acceptance criteria are often written using the **Given, When, Then** format:

- **Given:** The starting condition
- **When:** The action the user performs
- **Then:** The specific result that should occur

For example:

```text
Given I am on the booking form,
when I submit a rental, date, and number of guests,
then the reservation should appear in my list of bookings.
```

For the same feature you selected in Step 1:

- Write **three to five acceptance criteria** using the Given, When, Then format.
- Write each criterion from the user's perspective.
- Make each expected result specific enough to determine whether it passed or failed.
- Perform each criterion against the running application.
- Mark each result as **Passed**, **Failed**, or **Unable to Test**.
- If a criterion fails, explain what happened.

The results below use the matching scenarios performed against the running application in Step 2.

<details>
<summary>Acceptance criteria format</summary>

| Given, When, Then | Result | Notes |
| ---------------- | ------ | ----- |
| Given I want to reserve Beachfront Condo for `2026-11-10`, when I select that rental and date, enter `1` guest, confirm, and open Bookings, then I should see my reservation with those details. | Passed | The rental, date, and guest count appeared correctly. |
| Given I have selected Beachfront Condo and `2026-11-10`, when I try to confirm without a guest count, then I should be asked to enter the guest count before a reservation is created. | Failed | A reservation was created with a blank guest count instead. |
| Given I have selected Beachfront Condo, `2026-11-11`, and `1` guest, when I select Confirm Booking twice, then I should have only one reservation for that stay in Bookings. | Failed | Two identical reservations appeared. |

</details>

A checklist item usually describes one specific check, such as submitting a form with an empty date. An acceptance criterion describes whether the user can accomplish a complete goal, such as successfully booking a rental.

Your checklist and acceptance criteria may overlap because they examine the same feature for different purposes.

## What to Submit

1. Create and initialize a GitHub repository.
2. Commit and push your work to the repository.
3. Make sure the repository is public. Private repositories will not receive credit.
4. Submit the URL on Canvas.

## AI Transparency

AI was used to help create portions of this file and to clean up its writing and formatting.
