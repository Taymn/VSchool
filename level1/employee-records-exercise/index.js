const employees = []
function Employee(name, jobTitle, salary, status = "Full Time"){  /* set a default that can be overridden */
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    
    this.printEmployeeForm = function() {
        console.log(`Name: ${this.name}`, `Job Title: ${this.jobTitle}`, `Salary: ${this.salary}`, `Status: ${this.status}`);
    };
}

var bob = new Employee("Bob", "V School Instructor", "$3000/hour", "Part Time");bob.printEmployeeForm()
var sue = new Employee("Sue", "V School TA", "$750/hour", "Contract");sue.printEmployeeForm()
var ben = new Employee("Ben", "Student", "$0/hour");ben.printEmployeeForm()
employees.push(bob,sue,ben)
console.log(employees)

// for (let i = 0; i < employees.length; i++){
//     employees[i].printEmployeeForm()
// }
