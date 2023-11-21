When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

 
//Function Scope: Visibility is limited to the function.
// var declarations are function scoped.
 function myFn() {
     var x = 10; 
     console.log(x); //prints 10
 }
 console.log(x); // ReferenceError: x is not defined


 //Block Scope: Visibility is limited to the block of code.
 //let / const declarations are block scoped.
 if (true) { 
     let x = 10;
     console.log(x); //prints 10
 } 
 console.log(x); // ReferenceError: x is not defined


 //A variable declared using ‘var’ can be redefined and even redeclared anywhere throughout its scope.
var x = 30;
console.log(x); //redeclared , //prints 30
x = "Hi"; //redefining or re-assigning (works without any error)
console.log(x); //prints "Hi"
 
var y = 10;
console.log(y); //prints 10
var y = "Hello"; //Redeclaring (works without any error)
console.log(y) //Prints "Hello"


//A variable declared using ‘let’ can be redefined within its scope but cannot be re-declared within its scope.
let x = 11;
console.log(x); //prints 11
x = "IB"; // redefined works without any error
console.log(x); //prints "IB"

let y = 12;
console.log(y); //prints 12
let y = "Scaler"; // error: Identifier y has already been declared

let z = 13;
if(true){
   let z = "Fun"; //works without any error as scope is different.
   console.log(z) //prints "Fun"
}
console.log(z) //prints 13


//A variable declared using ‘const’ cannot be redefined or re-declared within its scope.
const x = 10;
console.log(x); //prints 10
x = 11; // error: Assignment to constant variable.

const y;
y = 2; //error

const z = 12;
console.log(z) //prints 12
const z = 13; // error: Identifier 'z' has already been declared

//Variables declared using var are hoisted to the top of their scope and initialized with a value of undefined(special type).
//Variables declared using let are hoisted to the top of their scope but are not initialized with any value.
//Variables declared using const are hoisted to the top of their scope but are not initialized with any value.

console.log(x); // prints undefined
var x = 100;
console.log(x); //prints 100

console.log(y); //Reference error
let y = 200;
console.log(y); //prints 200

console.log(z); //Reference error
const z = 300;
console.log(z); //prints 300
