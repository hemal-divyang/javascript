//EX.1
//pass function as arguments to another function, or return function from another function called 
function twiceNum(number) {
  return function () {
    return number * 2
  }
}
let twiceTwo = twiceNum(2)
console.log(twiceTwo())


//EX.2
// add two numbers
function sum(a, b) {
  return a + b
}
//operate with a higher-order function
function calculate(operation, numsArray) {
  if (numsArray.length <= 2) {
    let a = numsArray[0]
    let b = numsArray[1]

    // return a function
    return operation(a, b)
  }
}

// calculate the sum of two numbers
console.log(calculate(sum, [5, 6])) // output: 11