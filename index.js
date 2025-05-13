// basic syntax of a promise
// let myPromise= new Promise(function(resolve,reject){
//     let success=true;
//     if(success){
//         resolve("data loaded");
//     }else{
//         reject("something wenrt wrong");
//     }
// })



function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
function callback(){
    console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback)