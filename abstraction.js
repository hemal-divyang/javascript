//An abstraction is a way of hiding the implementation details and showing only the functionality to the users.
In other words, it ignores the irrelevant details and shows only the required one.
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
