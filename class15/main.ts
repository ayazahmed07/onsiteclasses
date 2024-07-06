// Task 1
// create a sum function
// it accepts two parameter

// function sum(num1: number, num2: number) {
//   return num1 + num2;
// }

// let result = sum(3, 5);

// console.log(`result: ${result}`);

// Task 1 with arrow function

// let sum = (num1: number, num2: number) => {
//   return num1 + num2;
// };

// let result = sum(2,2)

// console.log(result)

// let substract = (num1: number, num2: number) => {
//     return num1 - num2;
//   };

//   let result = substract(2,10)

//   console.log(result)

// Task 2

// function checkevenodd(num: number) {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "odd";
//   }
// }

// console.log(checkevenodd(10))

// Task 2 with arrow function

// let checkoddeven = (number: number) => {
// if(number % 2 === 0){
//     console.log("Even")
// }else {console.log("Odd")}

// }

// checkoddeven(11);

// Task 3

//add a number to the end remove the number from first and remove 6

// let array1 = [4, 8, 6, 10, 28];

// function arrayoperation() {
//   array1.push(5);
//   array1.shift();
//   array1.splice(1, 1);

//   return array1;
// }

// console.log(arrayoperation());


// Task 4

// let arraymultiplication = (num: number) => {
// let array = [2,4,6,8,10]

// array.forEach(array => console.log(array * num))
// } 

// arraymultiplication(10)

let multiplay = (array: number[]) => {
for (let i = 0; i < array.length; i++)

array[i] *= 2  

return array

}

let myarray = [2,3,4,5,6]

console.log(multiplay(myarray));

