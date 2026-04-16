 // Promise for CallBack Function Example

const mp = new Promise((resolve, reject) => {
     let a = 5;
     let b = 11;    
    if (a + b === 15) {
        resolve("The sum is 15");
    } else {
        reject("The sum is not 15");
    }
 });

mp.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});



