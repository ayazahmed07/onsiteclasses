// Async Function Javascript

//async works pararel where the code takes time to run then we write a seprate code which runs pararel
// set timeout functions add delay in code and runs in pararlel
// sysnc runs line by line and waits for code to run before moving to next line
// async runs line by line and runs in pararlel

// import inquirer from "inquirer";

// console.log("First");

// setTimeout(() => {
//     console.log("Second");

// }, 5000)

// console.log("Third");

// function pizzaOrder(preparePizzacb: any) {
//   setTimeout(() => {
//     console.log("Order Placed");
//     preparePizzacb(orderdeliver);
//   }, 6000);
// }

// function preparePizza(orderdelivercb: any) {
//   setTimeout(() => {
//     console.log("Pizza is prepared");
//     orderdeliver();
//   }, 2000);
// }

// function orderdeliver() {
//   setTimeout(() => {
//     console.log("Order is Delivered");
//   }, 10000);
// }

// pizzaOrder(preparePizza)

// TO MAKE FUNCTION TYPE

// type Fn = () => void;

// function Pizza(prepare: Fn){

// }

//New Topic Promise

type Fn = () => void;

function checkmarks() {
  return new Promise((resolve, reject) => {
    let marks = 91;
    setTimeout(() => {
      if (marks >= 90) {
        resolve("You are passed");
      } else {
        reject("You are failed");
      }
    }, 2000);
  });
}

// checkmarks().then((fff) => {console.log(fff);}).catch((ee) => {
// console.log(ee);})

let result = await checkmarks();
console.log(result)
