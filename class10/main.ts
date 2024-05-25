// // Topic "Any" to pass any type of data if never shows error

// let age: any;

// age = 333

// let age1: unknown

// age1 = "dfdf"

// let price = 18;

// console.log(price.toFixed(4));

// let age: unknown;

// age = 18;

// console.log((age as number).toFixed(2)) // Explicit casting consider age as number method 1

// let newAge = age as number; // method 2

// (<number>age); // method 3

// function multiplay (a: number, b: number){
// let multiplication = a * b;

// return multiplication

// }
// console.log(multiplay(5, 10))

// if you need to get output outside of function then you need to return the function otherwise not

// function sum(...rest: number[]): void {
//   let total = 0;

//   for (let i = 0; i < rest.length; i++) {
//     total += rest[i];
//   }

//   console.log(total)
// }

// sum(1, 2, 3, 4);

// Function Overlaod  - when main function has type any then it will check for over load
function sum(agr1: number, arg2: number): number; // Overlaod

function sum(agr1: string, arg2: string): string; // Overlaod

function sum(agr1: number, arg2: string): string; // Overlaod

function sum(agr1: string, arg2: number): string; // Overlaod

function sum(agr1: boolean, arg2: number): string; // Overlaod

function sum(agr1: any, arg2: any): any {
  return agr1 + arg2;
}

console.log(sum(2, 3));
console.log(sum("2", "3"));
console.log(sum(2, "3"));
console.log(sum("2", 3));
console.log(sum(true, 3));
console.log(sum(false, 3));
