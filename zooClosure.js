//% Node.js -> local of anonymous function
//! Browser -> window object (global)
var elephant = "elephant";

//! DEFINILTELY global in Node as well as browser
rat = "rat";

function zoo() {
    const tiger = "is alive";
    const lion = "killed";

    function cage() {
        // let tiger = "dead";
        //% tiger is NOT defined in cage
        //% tiger is outside (lexical environtment)
        console.log("tiger", tiger);
        console.log("elephant", elephant);
    }
    return cage; //!ALL local variables MUST be destroyed - tiger & lion
}

const jail = zoo();
jail();