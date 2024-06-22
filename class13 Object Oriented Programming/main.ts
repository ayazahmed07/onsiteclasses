// Object Oriented Programming / by doing object oriented programming we can organize our code

// Object Base programming

// Class: A blueprint for creating objects. It defines a datatype by bundling data (attributes) and methods (functions or procedures). always start with capital letter
// Object: An instance of a class. When a class is defined, no memory is allocated until an object of that class is created.
// we always write new before class when using calss

class House {
  ownerName: string = "Ayaz";
  address: string = "House no F 818 Al fatah colony orangi";
  numberofDoors: number = 2;
}

let h1 = new House();

console.log(h1.address)
console.log(h1["address"]) // to acces addres