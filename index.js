// variable: "ability to vary" -> it has five properties

/* 1. write "var" to declare a variable
2. give a "name" to the variable
3. use "=" (equal to) sign after that
4. write the "value" after equal to sign
5. write ";" semicolon after the value */

//right side of the "=" (equal to) value is stored in the left side "name" of the variable.

//to verify "whether this value has been assigned in the vaiable, we use comsole.log(variable name).

/* 1. numeric variable or number type variable
2. string type variable
3. boolean type variable
*/

/* variable should be written in a single word, meaningful, camelCase */

//var : globally and locally works and changeable, editabel
//let : only used globally or only used locally (either or), changeable, editable
//const : only globally or locally (either or), but not changebale or editable.

//Data-type
/* 1. String
2. numeric/number type
3. boolean (true/false) */

//camelcae examples 
var price = 100;
tshirtPrice = 100;
myTshirtPrice = 100;
//console.log(myTshirtPrice);

var name1 = "ryan"
//console.log(name1);

var address = "kolkata, delhi, mumbai, chennai"
//console.log(address);

//boolean
var inbox = false;
//console.log(inbox);

var saddy = true;
//console.log(saddy);

var firstVariable = "It is our first variable";
firstVariable = "New variable";
firstVariable = 10;
//console.log(firstVariable);

let secondVariable = "It is our second variable";
secondVariable = 10;
//console.log(secondVariable);

const thirdVariable = "It is our third variable";
//thirdVariable = 10; // not changeable
//console.log(thirdVariable);
//console.log(firstVariable, secondVariable, thirdVariable);

let number1 = 9;
let number2 = "23";
let number3 = -"17"
const add1 = number1 + number2;
const add11 = number2 + number1;
const add2 = number2 + number3;
const add21 = number3 + number2;
const add3 = number1 + number3;
const add31 = number3 + number1;

// console.log(add1);
// console.log(typeof (add1));
// console.log(add11);
// console.log(typeof (add11));
// console.log(add2);
//console.log(typeof (add2));
// console.log(add21);
//console.log(typeof (add21));
// console.log(add3);
// console.log(typeof (add3));
// console.log(add31);
//console.log(typeof (add31));


number1 = 9;
number2 = "23";
number3 = -"17"

const substract1 = number1 - number2;
const substract11 = number2 - number1;
const substract2 = number1 - number3;
const substract21 = number3 - number1;
const substract3 = number2 - number3;
const substract31 = number3 - number2;


// console.log(substract1);
// console.log(typeof (substract1));
console.log(substract11);
console.log(typeof (substract11));
console.log(substract2);
console.log(typeof (substract2));
// console.log(substract21);
// console.log(typeof (substract21));
// console.log(substract3);
// console.log(typeof (substract3));
// console.log(substract31);
// console.log(typeof (substract31));

let firstLine = "where is your home ?"
let secondLine = "my home is in kolkata."
const fullLine = firstLine + " " + secondLine;
// console.log(firstLine + secondLine);
//console.log(fullLine);

let newNumber1 = "102"; //it is "string"
//console.log(newNumber1);
//console.log(typeof (newNumber1));

newNumber1 = +"102" // it will be "string"
//console.log(typeof (newNumber1));

let newNumber2 = -"102";
console.log(newNumber2);
console.log(typeof(newNumber2)); // it will be "number"

let newNumber3 = "102"; //it was "string"
//console.log(typeof(newNumber3));
newNumber3 = Number("102"); // it is "number" now
//console.log(newNumber3);
//console.log(typeof(newNumber3));

let newNumber4 = 4; //it is "number"
//console.log(newNumber4);
//console.log(typeof(newNumber4));
newNumber4 = String(4); // it will be "string"
// console.log(newNumber4);
// console.log(typeof(newNumber4));

//operators

// + , - , * , / , < , > , % , &&, &, =, ==, ===, >=, <=, =>, [], {}

let x = 1;
let y = 2;
let z = 3;

// console.log(x = y);
// console.log(x == y);
// console.log(x != y);
// console.log(x !== y);
// console.log(x-y != z);
// console.log(x-z != y);
// console.log(typeof(x-z != y));

//determination of power in && and || operator
// console.log(typeof(x && y));
// console.log(typeof(x || y));
console.log((y+z)||y);







