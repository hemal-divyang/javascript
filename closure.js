//closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
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
