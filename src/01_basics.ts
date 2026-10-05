let message : string = "hello, typescript";
console.log(message);

//Primitives
let username : string = "John Doe";
let age : number = 30;
let isAdmin : boolean = true;

//Arrays
let numbers : number[] = [1, 2, 3, 4, 5];
let names : string[] = ["Alice", "Bob", "Charlie"];

//tuples
let person : [string, number] = ["manisha", 30];

//Enums
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor : Color = Color.Green;

//any type (avoid when possible)
let randomValue : any = 10;
randomValue = "Hello";
randomValue = true;

//unknown type (safer than any)
let userInput : unknown;
userInput = 5;
userInput = "Hello";

//functions
function subscribe(message : string) : void {
    console.log(message);
}

//Null and Undefined
let nullValue : null = null;
let undefinedValue : undefined = undefined;
