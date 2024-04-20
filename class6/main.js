"use strict";
// let age = 30; // global variable can be used every where
Object.defineProperty(exports, "__esModule", { value: true });
// if (true) {
//   console.log(age);
// } // curly bracket is called block - varaible which is inside a currly bracked is called a local variable which
// // can not be used outside the block
// // Hoisting
// let age1; // declares a variable
// age1 = 24; // initailize a variable
// console.log(age1);
// var age2 = 90;
// console.log(age2);
// // wherever we use varaible var it will go on top because of hoisting even if we declare it after console.
// Basic Objects in Typescript
let car = {
    name: "Toyota",
    Model: 2022,
    Make: "Carolla",
    Chasis_No: 103412366788,
};
console.log(car);
console.log(car.Model);
console.log(car.Make);
console.log(car.Chasis_No);
