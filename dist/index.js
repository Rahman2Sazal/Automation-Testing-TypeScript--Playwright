"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello, TypeScript!");
let age = 25;
setTimeout(() => {
    console.log(`Age is: ${age}`);
}, 2000);
let name1 = "John Doe";
if (age > 18) {
    console.log(`${name1} is an adult.`);
}
setTimeout(() => {
    console.log("Program finished.");
}, 3000);
age = age + 5;
console.log(`New age is: ${age}`);
//# sourceMappingURL=index.js.map