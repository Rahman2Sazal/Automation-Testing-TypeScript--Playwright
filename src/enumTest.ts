enum   Size1 {
    Small = "small",
    Medium = "medium",
    Large = "large"
}

let mySize: Size1 = Size1.Medium;
console.log(mySize); // Output: "medium"

const enum Size2 {
    Small = 1,
    Medium,
    Large
}

let mySize2: Size2 = Size2.Medium;
console.log(mySize2); // Output: 2