let employee: { 
    id: number; 
    name: string; 
    position: string; 
    department: string; 
    salary: number;
}
 = 
{   id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Development",
    salary: 70000
};
console.log(employee);

employee.salary = 75000; // Adding a new property
console.log(employee);