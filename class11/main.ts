// // Assync Javascript Home Work

// // let num1 = "Hamza";

// // let num2 = num1.toLocaleLowerCase()

// // console.log(num2);

// // Narrowing

// let a: string | number;

// a = 10;

// let b = a.toFixed(100);

// console.log(b);

// // from multiple data types to 1 data type is called narrowing

// let num1 = "true";

// console.log(typeof num1 == "string");

// let randomnumber = Math.random()

// console.log(`My random number is ${(randomnumber)}`);

// let a = randomnumber > 0.05 ? "Ayaz ahmed" : 14;

// if(typeof randomnumber == "string") {               // This is called typeguard

//     console.log(`"Narrowing - String" ${randomnumber} `);
// }
// else {
// console.log(`"Narrowing - Number" ${randomnumber}`)
// }

// Null when we intentnally want to keep a variable null

// let age = null;

// Stuctural Typing

// Interface to make object type and when we make a type we use =
// interface Address {
//   city: string;
//   state: string;
// }



// interface User {
//   name: string;
//   age: number;
//   address: Address;
// }

// let User1: User = {
//   name: "Hamza",
//   age: 23,
//   address: { city: "Karachi", state: "Pakistan" },
// };

// console.log(User1);



interface Deal1 {
food: string

}

interface Deal2 {
  food: string
  drink?: string
}


let mudasirorder: Deal1 = {
food: "Biryani"


} 

let muhammadorder: Deal2 = {
food: "Biryani",
drink: "Coke"
}

// Extra propeterties are allowed

// let mudasirtable: Deal1 = muhammadorder - This is called stale object i.e old object 💕


// Extra properties are not allowed in fresh object

let mudasirtable: Deal1 = {
  food: "Biryani",
  drink: "Coke"
  }





// Error propetry drink is missing - now drink is optional.

// let muhammadtabl: Deal2 = mudasirorder



