"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 0.1; //undefined
    return income * 1.2;
}
console.log(calculateTax(10000, 2023)); // Output: 12000
//# sourceMappingURL=functionTest.js.map