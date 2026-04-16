//Create a script that uses lets , const ,  and functions to process employee data.
// The program should use a function to calculate based bonuses on years of service and display the results in console.

const EmpLibrary = require('./ashlibrary1');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question('Name of Employee: ', function(name){
    rl.question('Years of Service of Employee: ', function(yearsOfService) {
        rl.question('Salary of the Employee: ', function(salary) {
            const emp = {
                name: name,
                yearsOfService: Number(yearsOfService),
                salary: Number(salary)
            };
            let bonus = EmpLibrary.calculateBonus(emp);   
            EmpLibrary.displayBonuses(emp, bonus);  
            rl.close();
        });
    }); 
});




