class Account {
    constructor(an, hn, bal) {
        this.accountNumber = an;
        this.holdersName = hn;
        this.balance = bal;
    }
}

class SavingsAccount extends Account {
    constructor(an, hn, bal, min) {
        super(an, hn, bal); //! I'm feeling lazy... tell the other class
        this.minmumBalance = min;
    }
}

const acct = new SavingsAccount(1, "Brendan", 1000, 500);