// Inherit means receive from previous holder
//Inheritance in javascript is used to inherit attributes and methods of a class. Classes are inherited using the extends keyword.
//The class that is being inherited is known as the parent class, and the class that is inheriting the parent class is known as the child class.

//class inheritance
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

//property inheritance

function Alien(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "alien"
}

Alien.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
Alien.prototype.sayPhrase = () => console.log(this.phrase)

const alien1 = new Alien("Ali", "I'm Ali the alien!")

console.log(alien1.name) // output "Ali"
console.log(alien1.phrase) // output "I'm Ali the alien!"
alien1.fly() // output "Zzzzzziiiiiinnnnnggggg"
