"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Size1;
(function (Size1) {
    Size1["Small"] = "small";
    Size1["Medium"] = "medium";
    Size1["Large"] = "large";
})(Size1 || (Size1 = {}));
let mySize = Size1.Medium;
console.log(mySize); // Output: "medium"
var Size2;
(function (Size2) {
    Size2[Size2["Small"] = 1] = "Small";
    Size2[Size2["Medium"] = 2] = "Medium";
    Size2[Size2["Large"] = 3] = "Large";
})(Size2 || (Size2 = {}));
let mySize2 = Size2.Medium;
console.log(mySize2); // Output: 2
//# sourceMappingURL=enumTest.js.map