//HIGHER ORDER FUNCTION

// function which takes a function as a argument or return a function as output
function x(fn){
fn();
}
function y() {
	console.log('hello world')
}
x(y) // x is higher order function and y is call back function


//normal function in higher order function
const data = [10,20,30]
const calculate_square = function(d){
	const output = [];
	for(var i=0;i<d.length;i++){
		output.push(d[i]*2);
	}
	return output
}

const calculate_addone = function(d){
 const output = [];
 for(var i=0;i<d.length;i++){
	output.push(d[i]+1)
 }
 return output
}

console.log(calculate_square(data))
console.log(calculate_addone(data))


//conver above normal function to higher order function
const data = [10,20,30]
function cal_square(x){
 return x*2
}
function cal_add(y){
 return y+1
}
const calculate_square = function(d, calculate){
	const output = [];
	for(var i=0;i<d.length;i++){
		output.push(calculate(d[i]));
	}
	return output
}
console.log(calculate_square(data,cal_square))
console.log(calculate_square(data,cal_add))

//* map is higher order function
