"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let greetings = "Hello, World!";
if (greetings !== null) {
    console.log(greetings.toUpperCase());
}
else {
    console.log("No greetings available.");
}
function printMessage(message) {
    if (message !== null) {
        console.log(message.toUpperCase());
    }
    else {
        console.log("No message available.");
    }
}
printMessage("Hello, TypeScript!");
printMessage(null);
//# sourceMappingURL=nullable.js.map