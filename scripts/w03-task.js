/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}
function AddNumbers(){
    let num1 = Number(document.querySelector("#add1").value);
    let num2 = Number(document.querySelector("#add2").value);
    
    document.querySelector("#sum").value = add(num1, num2);
}

document.querySelector("#addNumbers").addEventListener("click", AddNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2){
    return number1 - number2;
}

document.querySelector("#subtractNumbers").addEventListener("click", function (subtractNumbers){
    let SubNum1 = Number(document.querySelector("#subtract1").value);
    let SubNum2 = Number(document.querySelector("#subtract2").value);
    let dif = subtract(SubNum1, SubNum2);
    
    document.querySelector("#difference").value = dif;
});


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let nu1 = Number(document.querySelector("#factor1").value);
    let nu2 = Number(document.querySelector("#factor2").value);
    
    document.querySelector("#product").value = multiply(nu1, nu2);

}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

function divideNumbers(){
    let nu1 = Number(document.querySelector("#dividend").value);
    let nu2 = Number(document.querySelector("#divisor").value);
    
    document.querySelector("#quotient").value = divide(nu1, nu2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const date = new Date();
const year = date.getFullYear();

document.getElementById("year").innerHTML = year;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.getElementById("array").innerHTML = numbers;

/* Output Odds Only Array */
let odd = numbers.filter((number) => number % 2 === 1)
document.getElementById("odds").innerHTML = odd;

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbers.filter((number) => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbers.reduce((sum, num) => sum + num);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbers.map(num => num * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = (numbers.map(num => num * 2).reduce((sum,num) => sum + num));
