"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCustomerInfo(customerID) {
    return customerID === 123 ? { name: "John Doe", age: 30 } : null;
}
let customerInfo = getCustomerInfo(0);
if (customerInfo !== null && customerInfo !== undefined) {
    console.log(customerInfo.name);
}
console.log(customerInfo?.name); // Output: undefined (if customer is null or undefined)
console.log(customerInfo?.age); // Output: undefined (if customer is null or undefined)
let customerInfo2 = getCustomerInfo(123);
console.log(customerInfo2?.name); // Output: John Doe
console.log(customerInfo2?.age); // Output: 30
console.log(customerInfo2?.birthdate?.getFullYear()); // Output: undefined (birthdate is optional and not provided)
//# sourceMappingURL=optionalChaing.js.map