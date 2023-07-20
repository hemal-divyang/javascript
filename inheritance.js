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