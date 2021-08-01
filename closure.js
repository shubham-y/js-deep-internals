//! Clousre is not a function
//! Closure is not created when you return a function
//* Closure is a dictonary
//* Closure is created when you access a variable outside a function
(function() {
    let balance = 0; //! NOT a GLOBAL variable
    glob = 10;
    function deposit(amount) {
        balance += amount;
    }

    function withdraw(amount) {
        balance -= amount;
    }

    function print() {
        console.log(balance);
    }

    deposit(1000);
    withdraw(500);
    print();
})();