function getPromise() {
    return new Promise(r => r(42));
}

async function getAsync(){ //% EVERY async function returns a Promise
    return 84; //! -> return new Promise((resolve,reject) = {resolve(84);})
}

function nonAsync(){
    return 21;
}

async function doWork() {
    const r1 = await getPromise();
    console.log("r1", r1);
    const r2 = await getAsync();
    console.log("r2", r2);

    const r3 = await nonAsync(); //! HUH? await on not Promise??
    console.log("r3", r3);

    return "Done"; //! return new Promise( r => r("Done"));
}

const r = doWork();
r.then(r=>console.log(r));