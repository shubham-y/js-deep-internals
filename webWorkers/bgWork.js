//! NO DOM in Woker
//! Cannot access HTML/CSS
//! ONLY do COMPUTE

onmessage = function(event) {
    const time = event.data;
    console.log("worker got ", time);
    const start = new Date;
    while (new Date - start < time)
    ;
    console.log("worker completed", time);
    postMessage(`Done in ${time}`);
}