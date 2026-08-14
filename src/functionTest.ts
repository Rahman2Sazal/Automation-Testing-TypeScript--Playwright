

function calculateTax(income: number, taxYear: number= 2022): number {

    if (taxYear < 2022) 
            return income * 0.1; //undefined
    return income * 1.2;
}


console.log(calculateTax(10000, 2023)); // Output: 12000

