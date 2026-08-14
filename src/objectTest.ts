let employee: { 
    readonly id: number; 
    name: string; 
    position: string; 
    department: string; 
    salary: number;
    joiningdate: Date; // Optional property
    retiredate?: Date; // Optional property
    setRetiredate: (date: Date) => void; // Optional method
}
 = 
{   id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Development",
    salary: 70000,
    joiningdate: new Date("2020-01-15"),
    setRetiredate: (date: Date) => {
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
console.log(employee);
