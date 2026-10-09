
 // Program requirements:
 // - A user can withdraw funds.
 // - A user can deposit funds.
 // - A user's balance should never become negative.
 // - A PIN must be provided during every action.

 const USER = "Rose Thecat";

 // REVIEW: BALANCE is an array instead of a number.
 // This will cause problems when doing calculations.
 const BALANCE = [15, 983];
 const USER_PIN = 1234;

 // Deposits money into a user's account.
 export function deposit(pin: number, balance: number) {
   if (pin === USER_PIN) {
     // REVIEW: This doesn't actually update the account balance.
     // It only changes the local variable and returns the original balance.
     balance = BALANCE + balance;
     console.log(BALANCE);
     return BALANCE;
   } else {
     console.log("Incorrect PIN");
   }
 }

 // Withdraws money from a user's account.
 export function withdrawl(pin: number, amount: number) {
   if (pin === USER_PIN) {
     // REVIEW: This is using the same logic as deposit.
     // It should subtract the amount, not add it.
     // Also, balance isn't defined in this function.
     balance = BALANCE + balance;
     console.log(BALANCE);
     return BALANCE;
   } else {
     console.log("Incorrect PIN");
   }
 }

 // Returns the account balance.
 export function balanceCheck() {
   // REVIEW: This function doesn't check for a PIN,
   // even though every action is supposed to require one.
   return BALANCE;

   // REVIEW: This line will never run because it's after return.
   console.log(`Your balance is ${BALANCE}`);
 }

 // Transfers money to another user's account and withdraws it from the account.
 export function transfer(pin: number, amount: number, reciver: string) {
   // REVIEW: withdrawl requires two arguments, but only one is passed.
   // The PIN isn't being passed or checked.
   const transferAmount = withdrawl(amount);

   // REVIEW: This prints success even if the withdrawal fails.
   // It also doesn't actually send money to another account.
   console.log(`Success! ${amount} was transferred to ${reciver}`);

   // REVIEW: This returns the function instead of calling it.
   return balanceCheck;
 }

 // REVIEW: There's no check to prevent withdrawing more money
 // than the account has, which could allow a negative balance.

 // AI transparency: AI was used to clean up this code.
