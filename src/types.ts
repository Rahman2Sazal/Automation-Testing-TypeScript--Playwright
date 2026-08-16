type Employee = {
  readonly id: number;
  name: string;
  retiredate?: Date;
  setRetiredate?: (date: Date) => void;
};



let employee: Employee = { 
    id: 101,
    name: "Alice Smith",
    setRetiredate: (date: Date) => {
        employee.retiredate = date;
        console.log(`Retirement date set to: ${employee.retiredate}`);
    }
    
};