
//The call, bind and apply methods can be used to set the this keyword independent of how a function is called.
//The bind method creates a copy of the function and sets the this keyword, With the bind() method, an object can borrow a method from another object.
//while the call and apply methods sets the this keyword and calls the function immediately.

//CALL,APPLY,BIND

//below is call method
const employee = {
	name:'Hemal',
	lastName:'Barsopiya',
	getFullName: function(){
		return `${this.name} ${this.lastName}`
	}
}

const customer = {
	name:'Divyang',
	lastName:'Panchasara'
}

employee.getFullName.call(customer)

//below is apply method which is similar to call but passing parameter value is in array format

const employee = {
	name:"Hemal",
	lastName:'Barsopiya',
	getFullname: function(city,profile){
		return `${this.name} ${this.lastName} ${city} ${profile}` 
	}
}

const customer = {
	name:'Divyang',
	lastName:'Panchasara'
}

employee.getFullname.call(customer,'Rajkot','Instructor');
employee.getFullname.apply(customer,['Ahmedabad','Artist'])

//below is bind method, bind will execute function later on
const employee = {
	name:"Hemal",
	lastName:'Barsopiya',
	getFullname: function(city,profile){
		return `${this.name} ${this.lastName} ${city} ${profile}` 
	}
}

const customer = {
	name:'Divyang',
	lastName:'Panchasara'
}

const handler = employee.getFullname.bind(customer,'Rajkot','Instructor');
console.log(handler());

