//! FAT Arrows everywhere EXCEPT as class methods

class Account {
    //% Here be fields
    #_accountNumber = 0; //# -> private
    #_holdersName = ""; //# -> private
    #_balance = 0; //# -> private

    constructor(an, hn, bal) {
        this.#_accountNumber = an;
        this.#_holdersName = hn;
        this.#_balance = bal;
    }

    //% Getters and setters
    get balance(){
        return this.#_balance;
    }

    set balance(newValue) {
        console.log("Haha... you wish");
    }

    #secret() {
        this.#_balance *=2;
    }

    //% here be methods (optimized like arrows function - no prototype)
    deposit(amount) {
        this.#_balance += amount;
    }

    withdraw(amount) {
        this.#_balance -= amount;
    }

    print() {
        console.log(this.#_accountNumber, this.#_holdersName, this.#_balance);
    }
}

const eich = new Account(1, "Brendan Eich", 1000000000.00);
console.log(eich.balance);
eich.balance = 2000000000;
// eich.#_balance = 20000;
// eich.#secret();
eich.print();