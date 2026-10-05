//BASIC FUNCTION WITH TYPE 
function add(a:number, b:number) : number{
    return a + b;
}

//optional parameters
function greet(name : string, greeting? : string) : string{
    if(greeting){
        return `${greeting} ${name}`
    }
    return `hello ${name}`
}

//default paramenters
function mutliply(a:number, b:number =1) : number{
    return a*b;
}

//rest paramerters
function sum(...numbers:number[]): number{
    return numbers.reduce((acc, curr)=> acc + curr, 0);
}

//arrow function
const divide = (a : number,b: number) : number => a/b;

//function type
let calculate : (x : number, y : number) => number;
calculate = add;