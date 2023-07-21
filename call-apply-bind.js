//EX.1
function sayHello() {
    return "Hello " + this.name;
}
var obj = { name: "Sandy" };
sayHello.call(obj); // Returns "Hello Sandy"	

//EX.2
var person = {
    age: 23,
    getAge: function () {
        return this.age;
    }
}
var person2 = { age: 54 };
person.getAge.call(person2);// Returns 54 

//EX.3 call() accepts arguments:
function saySomething(message) {
    return this.name + " is " + message;
}
var person4 = { name: "John" };
saySomething.call(person4, "awesome");// Returns "John is awesome"

//The apply method is similar to the call() method. The only difference is that,call() method takes arguments separately whereas, apply() method takes arguments as an array.

//Ex. apply()
function saySomething(message){
    return this.name + " " + message;
}
var person = {name:"Hemal"};
console.log(saySomething.apply(person ,['kem chho']));


//This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.
//Ex. bind()

var employeeDetail = {
    showDeatil: function(department,position){
        return this.name + "|" + department + "|" + position
    }
}
obj = {name: 'Hemal'}
var empDet = employeeDetail.showDeatil.bind(obj,"IT","Consultant")
console.log(empDet)