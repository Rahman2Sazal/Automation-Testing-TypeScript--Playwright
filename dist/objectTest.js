"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = { id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Development",
    salary: 70000,
    joiningdate: new Date("2020-01-15"),
    setRetiredate: (date) => {
        employee.retiredate = date;
    }
};
const retirementDate = new Date(employee.joiningdate);
retirementDate.setFullYear(retirementDate.getFullYear() + 15); // Adding 15 years to the joining date
employee.retiredate = retirementDate; // Setting the retiredate property
console.log(employee);
/*employee.id = 2;
This line will cause a compilation error because 'id' is a readonly property*/
employee.salary = 75000; // Adding a new property
employee.setRetiredate(employee.retiredate); // Calling the setRetiredate method
//  this will set the same value it already has
console.log(employee);
//# sourceMappingURL=objectTest.js.map