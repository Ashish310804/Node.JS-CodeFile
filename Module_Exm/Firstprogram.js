const mathLibrary = require('./ashlibrary1');
console.log("5 + 3 =", mathLibrary.add(5, 3));
console.log("5 - 3 =", mathLibrary.subtract(5, 3));
console.log("5 * 3 =", mathLibrary.multiply(5, 3));
console.log("5 / 3 =", mathLibrary.divide(5, 3));
try {
    console.log("5 / 0 =", mathLibrary.divide(5, 0));
} catch (error) {
    console.log("Error:", error.message);
}   