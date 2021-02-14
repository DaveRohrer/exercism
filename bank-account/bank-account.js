//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {

  }

  open() {
    if (!this._open) {
      this._balance = 0;
      this._open = true;
    }
    else {
      throw new ValueError;
    }
  }

  close() {
    if (this._open) {
      this.withdraw(this._balance); // Not needed for the tests but feels better
      this._open = false;
    }
    else {
      throw new ValueError;
    }
  }

  deposit(amount) {
    if (this._open && amount >= 0) {
      this._balance += amount;
    }
    else {
      throw new ValueError;
    }
  }

  withdraw(amount) {
    if (this._open && amount >= 0 && amount <= this._balance) {
      this._balance -= amount;;
    }
    else {
      throw new ValueError;
    }
  }

  get balance() {
    if (this._open) {
      return this._balance;
    }
    else {
      throw new ValueError;
    }
  }

}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
