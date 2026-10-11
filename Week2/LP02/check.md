# LP02: Final Check

## Group members' final review

- Dmitriy (@DiscipleA): I reviewed Mat’s findings and discussed the corrections through the pull request. Through contamplaiting, the corrected code was prepared to update balances, validate PINs, prevent overdrafts, and handle transfers correctly. The additional automated checks and TypeScript check passed. The ESLint comparison and final group review are still pending.


- Mat (@Mozog90): Final personal review note pending.



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
   - Pending comparison with `issue_log.md` and the ESLint output.


3. Did ESLint identify anything our group missed?
   - Pending comparison with `issue_log.md` and the ESLint output.

## Screenshots

Terminal screenshots are saved in `screenshots/`:

- `eslint-version.png`: Installed ESLint version.
- `eslint-original.png`: Original-file results.
- `eslint-corrected.png`: Corrected-file results, including the exit status if there is no output.
