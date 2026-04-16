function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}   
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }   
    return a / b;
}


function calculateBonus(employee) {
    let bonus;    
    if (employee.yearsOfService <= 5) {
        bonus = employee.salary * 0.10; 
    } 
    else if (employee.yearsOfService > 5) {
        bonus = employee.salary * 0.20; 
    }
    return bonus;
}

function displayBonuses(employee , bonus) {
    console.log("Employee Name: ",employee.name);
    console.log("Years of Service: ",employee.yearsOfService);
    console.log("Salary: ",employee.salary);
    console.log("Bonus: ",bonus);
}


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    calculateBonus,
    displayBonuses
};  
