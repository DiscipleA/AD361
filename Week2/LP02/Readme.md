# Learning Practice: Static Testing

## Topics

- Static testing
- Manual code reviews
- Automated static analysis with `ESLint`

## Learning Objectives

- Perform a manual code review.
- Compare manual code reviews with automated static analysis.
- Perform the responsibilities of an author, reviewer, or scribe.
- Document identified defects and suggested fixes.

## Resources

- [Types of Static Testing](https://www.geeksforgeeks.org/software-engineering/types-of-static-testing/)
- [ESLint](https://eslint.org/)
- [typescript-eslint](https://typescript-eslint.io/)

## Read First!

**You may complete this activity asynchronously or together as a group.**

You can complete the activity in one of two ways:

- Work together during one group session. This is the recommended option.
- Work asynchronously by reviewing the code independently and communicating through pull request comments.

If you work asynchronously, one group member should create the GitHub repository and add the other group members as collaborators before beginning the review.

**Do not use AI tools for this activity.** This includes ChatGPT, Claude, Copilot, and similar tools. You will use AI-assisted tools later in this course. The purpose of this activity is to develop the skills needed to recognize when AI-generated information is incorrect and to prompt AI effectively.

# Deliverables

## Step 0: Set Up

- Create a project folder:

  ```bash
  mkdir LP02
  cd LP02
  ```

- Add the provided `bankOfTheNorth.ts` file to the project folder.

- Verify that Node.js is installed:

  ```bash
  node --version
  ```

  If Node.js is not installed, download it from [nodejs.org](https://nodejs.org/).

- Create a Node project:

  ```bash
  npm init -y
  ```

- Install `ESLint` and `typescript-eslint`:

  ```bash
  npm install --save-dev eslint @eslint/js typescript typescript-eslint
  ```

- Create a file named `eslint.config.mjs`:

  ```javascript
  import { defineConfig } from "eslint/config";
  import js from "@eslint/js";
  import tseslint from "typescript-eslint";

  export default defineConfig(
    js.configs.recommended,
    tseslint.configs.recommended,
  );
  ```

- Verify the installation:

  ```bash
  npx eslint --version
  ```

- Take a screenshot of your terminal showing that `ESLint` is installed. Save it in the `screenshots` folder.

- Add `node_modules/` to a `.gitignore` file before you push.

## Step 1: Assign Roles

Assign each group member one of the following roles:

### Reviewer

- Identify errors and potential defects in the code.
- If working asynchronously, leave comments directly on the code through a GitHub pull request.
- If working together, communicate issues as you find them so the scribe can record them.

### Scribe

- Create a file named `issue_log.md`.
- Document each identified issue and its suggested fix.
- Include the location, issue, explanation, suggested fix, and current status.
- You may use Google to research possible fixes if needed. Do not use AI tools for this activity.

Example issue-log entry:

- **Location:** Line 66
- **Issue:** The loop skips the final item in the list.
- **Explanation:** The loop ends before it reaches the final item.
- **Suggested Fix:** Replace the loop condition with `i < theList.length` or iterate over `theList.slice(1)`.
- **Status:** Ongoing

Possible statuses include:

- Ongoing
- Accepted
- Rejected
- Fixed
- Needs discussion

### Author

- Review the issues recorded by the scribe.
- Fix the agreed-upon defects.
- Save the corrected code in a new file named `fixBankOfTheNorth.ts`.
- Update the status of corrected defects to `Fixed`.

## Step 2: Perform Your Responsibilities

Complete the responsibilities assigned to your role.

Do not run the code or use `ESLint` during the manual review. The purpose of this step is to identify defects through manual static testing.

## Step 3: Check Your Group Members' Work

After each person has completed their assigned responsibilities, review the work completed by another role:

- **Reviewer:** Review `issue_log.md` and confirm that the identified defects were addressed.
- **Scribe:** Compare `issue_log.md` with the corrected code and update each defect's status.
- **Author:** Review the issue log and corrected code for unresolved defects.

Create a file named `check.md`. Each group member must add their name and a brief note describing the results of their final review, even if the note only says, `No additional issues found.`

## Step 4: Run an Automated Static Analysis

Run `ESLint` on the original code:

```bash
npx eslint bankOfTheNorth.ts
```

Take a screenshot of the results and save it in the `screenshots` folder.

Run `ESLint` on the corrected code:

```bash
npx eslint fixBankOfTheNorth.ts
```

Take a screenshot of the results and save it in the `screenshots` folder.

Compare the two results and add a short reflection to `check.md`:

- What did `ESLint` identify?
- What did your group identify that `ESLint` did not?
- Did `ESLint` identify anything your group missed?

<details>
<summary>Example output</summary>

![ESLint example](assets/eslint.png)

</details>

## What to Submit

1. Create and initialize a GitHub repository.
2. Add all group members as collaborators.
3. Commit and push the following:
   - `bankOfTheNorth.ts`
   - `fixBankOfTheNorth.ts`
   - `issue_log.md`
   - `check.md`
   - The `screenshots` folder
4. Make sure the repository is public. Private repositories will not receive credit.
5. **Every group member must submit the GitHub repository URL on Canvas.**

## AI Transparency

AI was used to clean up this file.
