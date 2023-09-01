// Inherit means receive from previous holder
//Inheritance in javascript is used to inherit attributes and methods of a class. Classes are inherited using the extends keyword.
//The class that is being inherited is known as the parent class, and the class that is inheriting the parent class is known as the child class.
class employee{
    constructor(name){
        this.name = name;
    }
    greet(){
        return "Hi! " + this.name
    }
}

class User extends employee{}
let empUser = new User("Hemal")
console.log(empUser.greet())
