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

