"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function kgtolbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.20462;
    }
    if (typeof weight === 'string') {
        return parseFloat(weight) * 2.20462;
    }
    throw new Error('Invalid weight type');
}
kgtolbs(70); // 154.3234
kgtolbs("70kg"); // 154.3234
//# sourceMappingURL=uniontype.js.map