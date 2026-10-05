"use strict";
let message = "hello, typescript";
console.log(message);
//Primitives
let username = "John Doe";
let age = 30;
let isAdmin = true;
//Arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];
//tuples
let person = ["manisha", 30];
//Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
//any type (avoid when possible)
let randomValue = 10;
randomValue = "Hello";
randomValue = true;
//unknown type (safer than any)
let userInput;
userInput = 5;
userInput = "Hello";
//functions
function subscribe(message) {
    console.log(message);
}
//Null and Undefined
let nullValue = null;
let undefinedValue = undefined;
