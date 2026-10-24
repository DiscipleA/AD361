# Lab: Black Box Testing

## Topics

- Black-box testing
- Equivalence partitioning
- Decision table testing
- State transition testing

## Learning Objectives

- Design black-box tests without viewing the application code.
- Identify valid and invalid equivalence partitions.
- Create decision tables from conditions and expected actions.
- Identify application states, events, and transitions.
- Create test cases using equivalence partitions, decision tables, and state transitions.

# Deliverables

## Step 1: Select a Website

### Website

- **Name:** Stack Overflow
- **URL:** https://stackoverflow.com/questions/ask
- **Features tested:**
  1. Question-title length
  2. Question-body requirement

The tests focus on creating a question. The website is treated as a black box. No website source code was used.

### Requirements used for testing

- A question title must contain **15 to 150 characters**.
- A question body must contain at least one non-space character.
- A question can be submitted only when both requirements are valid.

## Step 2: Equivalence Partitioning

### Feature 1: Question-title length

| Partition | Classification | Representative value | Expected result |
|---|---|---:|---|
| Fewer than 15 characters | Invalid | `14` characters | Reject the title |
| 15 through 150 characters | Valid | `50` characters | Accept the title |
| More than 150 characters | Invalid | `151` characters | Reject the title |

### Feature 2: Question body

| Partition | Classification | Representative value | Expected result |
|---|---|---|---|
| Body contains text | Valid | `I need help.` | Accept the body |
| Body is empty or spaces only | Invalid | `"   "` | Reject the body |

### Equivalence Partition Test Cases

| Test ID | Input | Expected result |
|---|---|---|
| EP01 | Title length `14` | Title rejected |
| EP02 | Title length `50` | Title accepted |
| EP03 | Title length `151` | Title rejected |
| EP04 | Body `I need help.` | Body accepted |
| EP05 | Body `"   "` | Body rejected |

## Step 3: Decision Table Testing

### Conditions

- Is the title length valid?
- Does the body contain text?
- Did the user select Submit?

### Action

- Submit the question only when all conditions are true.

| Condition | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
|---|---|---|---|---|
| Valid title | Yes | No | Yes | Yes |
| Body contains text | Yes | Yes | No | Yes |
| Submit selected | Yes | Yes | Yes | No |
| Expected action | Submit the question | Reject the question | Reject the question | Keep the question as a draft |

### Decision Table Test Cases

| Test ID | Title | Body | Submit selected | Expected result |
|---|---:|---|---|---|
| DT01 | `50` | Present | Yes | Question submitted |
| DT02 | `14` | Present | Yes | Question rejected |
| DT03 | `50` | Empty | Yes | Question rejected |
| DT04 | `50` | Present | No | Question remains a draft |

## Step 4: State Transition Testing

### States

- **S1:** Empty question form
- **S2:** Invalid title entered
- **S3:** Valid title and body entered
- **S4:** Question submitted

### Events

- Enter a title shorter than 15 characters
- Enter a title from 15 through 150 characters
- Enter a body
- Select Submit
- Clear the form

### State Transition Table

| Current state | Event | Next state | Expected result |
|---|---|---|---|
| Empty form | Enter a 10-character title | Invalid title entered | The question cannot be submitted |
| Invalid title entered | Replace it with a 50-character title and add a body | Valid title and body entered | The form is ready to submit |
| Valid title and body entered | Select Submit | Question submitted | The question is accepted |
| Empty form | Select Submit | Empty question form | The question is not submitted |
| Question submitted | Clear the form | Empty question form | The form is empty again |

### State Transition Test Cases

| Test ID | Starting state | Event | Expected result |
|---|---|---|---|
| ST01 | Empty form | Enter a 10-character title | The question remains invalid |
| ST02 | Invalid title entered | Enter a 50-character title and body | The question becomes ready to submit |
| ST03 | Valid title and body entered | Select Submit | The question is submitted |
| ST04 | Empty form | Select Submit | The question is not submitted |

## TypeScript Tests

The tests use small functions that represent the expected behavior. The code uses direct values and simple `if` statements. It does not use objects, classes, or advanced test structures.

Run the tests with:

```bash
npm test
```

![Jest test results](screenshots/test-results.png)

## What to Submit

1. Create and initialize a GitHub repository.
2. Commit and push your work to the repository.
3. Make sure the repository is public. Private repositories will not receive credit.

## AI Transparency & Requirements

AI was used to help organize the Markdown Format above. The website behavior was treated as a black-box requirement, without reviewing its source code.
