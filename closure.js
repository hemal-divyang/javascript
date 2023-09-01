//closure is the combination of a function bundled together (enclosed) with references to its surrounding state(the lexical environment).
//A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.
//Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.
//A block is also treated as a scope since ES6.
function greet(name) {
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // returning a function
    return displayName;
}

const g1 = greet('John');
console.log(g1); // returns the function definition
g1(); // calling the function
