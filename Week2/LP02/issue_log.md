## Bug 1
Location: bankOfTheNorth.ts, line 8 
Issue: "BALANCE" is an array instead of a primitive number data type 
Explanation: "BALANCE" being an array causes problems when functions use the variable for calculations with other primitives  
Suggested Fix: Change "BALANCE" to a primitive data type  
Status: Ongoing

## Bug 2 
Location: bankOfTheNorth.ts, deposit(pin: number, balance: number), line 14 - 16 
Issue: "BALANCE" variable isn't being updated 
Explanation: The lines themselves only update the local variable instead of the "BALANCE" variable, and the function, as a result, just returns the BALANCE variable   
Suggested Fix: Use addition assignment (+=) so that "BALANCE" is in the left operand; that way, the "balance" local variable is always added to the BALANCE, updating the variable and returning the final balance accurately   
Status: Ongoing

## Bug 3 
Location: bankOfTheNorth.ts, withdrawl(pin: number, amount: number), line 25 - 27 
Issue: using the same logic as "Bug 2"
Explanation: Line 25 is adding the balance as if it were performing a deposit, BALANCE is still being returned despite the variable not updating, and the function is not using the "amount" parameter.  
Suggested Fix: Use subtraction assignment (-=) so that "BALANCE" is in the left operand; that way, update the local variables so "amount" is used instead of "balance". 
Status: Ongoing

## Bug 4 
Location: bankOfTheNorth.ts, balanceCheck(), line 34 - 37
Issue: Function doesn't check for "USER_PIN"
Explanation: As outlined in the program requirements, a PIN must be provided for every action. balanceCheck() doesn't have a "pin" parameter like the functions before it, and doesn't have a conditional statement to check for strict equality with "USER_PIN".
Suggested Fix: include the "pin" parameter for balanceCheck(), and add the conditional statement that checks if "pin" is strictly equal to "USER_PIN"
Status: Ongoing

## Bug 5
Location: bankOfTheNorth.ts, balanceCheck(), line 37
Issue: console.log line 
Explanation: The line will never run because it's after the return statement
Suggested Fix: Move line 37 before the return statement in the function block.
Status: Ongoing 

## Bug 6
Location: bankOfTheNorth.ts, transfer(pin: number, amount: number, reciver: string), line 41
Issue: "withdrawl()" function call
Explanation: withdrawl requires two arguments, but only one is passed. The PIN isn't being passed or checked.
Suggested Fix: add the "pin" parameter to the withdrawl() function call. 
Status: Ongoing

## Bug 7 
Location: bankOfTheNorth.ts, transfer(pin: number, amount: number, reciver: string), line 42
Issue: console.log line  
Explanation: The line prints success even if the withdrawal fails. It also doesn't actually send money to another account.
Suggested Fix: Add a conditional statement that checks to see if the withdrawal was successful, then in the block of that statement, add the console.log line 
Status: Ongoing

## Bug 8 
Location: bankOfTheNorth.ts, transfer(pin: number, amount: number, reciver: string), line 43
Issue: return statement 
Explanation: The statement returns the balanceCheck() function instead of calling it.
Suggested Fix: The return statement itself should return the balanceCheck() function, along with its respective parameters (which should be fixed as described in the issue_log)   
Status: Ongoing

## Bug 9 
Location: bankOfTheNorth.ts
Issue: Programming requirement 
Explanation: There's no check to prevent withdrawing more money than the account has, which could allow a negative balance.
Suggested Fix: Create a conditional statement in the withdrawl() function that checks if the balance is negative.  
Status: Ongoing 





