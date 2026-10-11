# LP02: Final Check

## Group members' final review

- Dmitriy (@DiscipleA): I reviewed Mat’s findings and discussed the corrections through the pull request. With much contamplation, the corrected code was prepared to update balances, validate PINs, prevent overdrafts, and handle transfers correctly. The additional automated checks and TypeScript check passed. The ESLint comparison and final group review are still pending.

- Mateusz Ozog (@Mozog90) Reviewer:

I went through the issue log and compared all nine issues with the corrected code. From what I can see, Dmitriy addressed the problems identified during the manual review. The deposit and withdrawal functions now update the balance correctly, the PIN checks are in place, and the transfer function checks whether the withdrawal succeeded before continuing. I didn't find any additional issues during my review.

- Amde (@amdemw206-coder): Final personal review note pending.

## Corrected-code verification

`src/fixBankOfTheNorth.ts` contains the nine discussed fixes, marked with `// FIX:` comments. Rose's balance is a mutable number starting at 15. Deposits and withdrawals update it; PIN checks protect operations; overdrafts are rejected; successful transfers credit the second demonstration account.

## ESLint comparison

1. What did ESLint identify?
   - Original file `src/bankOfTheNorth.ts`: Pending actual ESLint output.

```
   /home/reader/Desktop/AD361/Week2/LP02/src/bankOfTheNorth.ts
   8:8   error  'USER' is assigned a value but never used                             @typescript-eslint/no-unused-vars
  20:6   error  The value assigned to 'balance' is not used in subsequent statements  no-useless-assignment
  20:6   error  'balance' is assigned a value but never used                          @typescript-eslint/no-unused-vars
  29:41  error  'amount' is defined but never used                                    @typescript-eslint/no-unused-vars
  56:10  error  'transferAmount' is assigned a value but never used                   @typescript-eslint/no-unused-vars

✖ 5 problems (5 errors, 0 warnings)
```

- Corrected file `src/fixBankOfTheNorth.ts`: Pending actual ESLint output.

```

ESLint exit code: 0
```

2. What did our group identify that ESLint did not?
   - Our group found several logic issues that ESLint didn't catch. For example, the withdrawal function was adding money instead of subtracting it, there was no check to prevent a negative balance, and the transfer function could report success even if the withdrawal failed. We also found missing PIN validation.

3. Did ESLint identify anything our group missed?
   - Yes, ESLint found five errors in the original code, mostly involving unused variables. Some were related to issues we already identified, but ESLint also flagged the unused USER and transferAmount variables, which weren't included in our issue log. The corrected code passed ESLint with no errors.

## Screenshots

Terminal screenshots are saved in `screenshots/`:

- `eslint-version.png`: Installed ESLint version.
- `eslint-original.png`: Original-file results.
- `eslint-corrected.png`: Corrected-file results, including the exit status if there is no output.
