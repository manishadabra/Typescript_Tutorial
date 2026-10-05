"use strict";
//BASIC FUNCTION WITH TYPE 
function add(a, b) {
    return a + b;
}
//optional parameters
function greet(name, greeting) {
    if (greeting) {
        return `${greeting} ${name}`;
    }
    return `hello ${name}`;
}
