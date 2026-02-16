// program to sum two numbers by taking input from the user
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        const sum = Number(num1) + Number(num2);
        console.log("The sum of", num1 , "and" ,  num2 , " is : " , sum);
        rl.close();
    });
});