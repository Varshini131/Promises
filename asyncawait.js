function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
async function sayHello(){
    console.log("waiting....");
    await delay(2000);
    console.log("Hello after 2 seconds!")
};
sayHello();