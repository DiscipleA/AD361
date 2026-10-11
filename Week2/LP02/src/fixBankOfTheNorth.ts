// Requirements: deposit, withdraw, never overdraw, and require a PIN for every action.
const USER = "Rose Thecat";
let BALANCE = 15; // FIX 1: one mutable primitive number for Rose's balance.
const USER_PIN = 1234;
let recipientBalance = 983; // Second demonstration account, named "Recipient".

export function deposit(pin: number, amount: number) {
  if (pin === USER_PIN) {
    // FIX 2: validate the amount before updating the stored balance.
    if (!Number.isFinite(amount)) {
      console.log("Invalid amount");
      return;
    }
    if (amount <= 0) {
      console.log("Amount must be greater than zero");
      return;
    }

    BALANCE += amount;
    console.log(`Your balance is ${BALANCE}`);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

export function withdrawl(pin: number, amount: number) {
  if (pin === USER_PIN) {
    if (!Number.isFinite(amount)) {
      console.log("Invalid amount");
      return;
    }
    if (amount <= 0) {
      console.log("Amount must be greater than zero");
      return;
    }
    if (amount > BALANCE) { // FIX 9: reject overdrafts before changing the balance.
      console.log("Insufficient funds");
      return;
    }

    BALANCE -= amount; // FIX 3: subtract the defined amount from the stored balance.
    console.log(`Your balance is ${BALANCE}`);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

export function balanceCheck(pin: number) {
  if (pin === USER_PIN) { // FIX 4: validate the PIN before revealing the balance.
    console.log(`Your balance is ${BALANCE}`); // FIX 5: log before returning.
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

export function transfer(pin: number, amount: number, receiver: string) {
  if (receiver === "Recipient") {
    const updatedBalance = withdrawl(pin, amount); // FIX 6: pass both arguments.
    if (updatedBalance !== undefined) { // FIX 7: continue only on success; zero is valid.
      recipientBalance += amount; // FIX 7: actually credit the second account.
      console.log(`Success! ${amount} was transferred from ${USER} to ${receiver}. Recipient balance: ${recipientBalance}`);
      return balanceCheck(pin); // FIX 8: call the function instead of returning its reference.
    }
  } else {
    console.log("Unknown recipient");
  }
}
