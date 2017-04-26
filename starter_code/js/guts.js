//Project group: Jose and Taji

// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


function divide(x,y) {
	//Write your code below this line
var over= x/y;
return over;
}

function multiply(x,y) {
var equals= x*y;
return equals;
}

function subtract(x,y) {
var answer= x-y;
return answer;
}

function add(x,y) {
var sum = x+y;
return sum;
}

function power(x,y) {
var power=Math.pow(x,y);
return power ;
}

function square_root(x) {
var root= Math.sqrt(x)
return root;
}

function logBase10(x) {
var log = Math.log(x);
return log;
}

function generateRandomNumber(x) {
    var randomNumberBetween0and30 = Math.floor(Math.random() * 3000);
    return randomNumberBetween0and30;
}
