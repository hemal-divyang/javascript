//An abstraction is a way of hiding the implementation details and showing only the functionality to the users.
//In other words, it ignores the irrelevant details and shows only the required one.
// link to check video : https://www.youtube.com/watch?v=jM0WcyQWMSM&t=481s
function Employee(name, sal){
  this.name = name;
  this.sal = sal;
  let bonus = 2000;
  let calSal = function(){
      let finalSal = this.sal + bonus;
    return finalSal
  }
  this.getEmpDet = function(){
    return calSal.call(this);
  }
}
let emp = new Employee("Hemal", 3000)
console.log(emp.getEmpDet())


//Ex.2
class Employee
{
constructor() {
if(this.constructor == Employee){
throw new Error(" Object of Abstract Class cannot be created");
}
}
display(){
throw new Error("Abstract Method has no implementation");
}
}
class Manager extends Employee
{
display(){
//super.display();
console.log("I am a Manager");
}
}
//var emp = new Employee;
var mang=new Manager();
mang.display();

