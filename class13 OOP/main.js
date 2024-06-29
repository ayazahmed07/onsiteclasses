"use strict";
// Object Oriented Programming / by doing object oriented programming we can organize our code
// Object Base programming
// Class: A blueprint for creating objects. It defines a datatype by bundling data (attributes) and methods (functions or procedures). always start with capital letter
// Object: An instance of a class. When a class is defined, no memory is allocated until an object of that class is created.
// we always write new before class when using calss
// class House {
//   ownerName: string;
//   readonly address: string;
//   numberofDoors: number;
//   constructor(name: string, Address: string, numberofDoors: number) {
//     (this.ownerName = name),
//       (this.address = Address),
//       (this.numberofDoors = numberofDoors);
//   } // to access class properties we use this. in constructor  it is a function which calls object
//   bell() {
//     console.log(this.address, "Ding Dong");
//   } // Methods
// }
// let h1 = new House("Ayaz", "House 818", 5);
// let h2 = new House("Faris", "House 320", 10);
// h1.bell()
// h2.bell()
// Newtopic Inheritance and Encapsulation
class Animal {
    constructor(aniname, aniage) {
        (this.name = aniname), (this.age = aniage);
    }
    eat() {
        console.log("Eating");
    }
}
class Cat extends Animal {
    constructor(name, age, eyecolor) {
        super(name, age);
        this.color = eyecolor;
    }
    meow() {
        console.log("Meao Meao");
    }
}
let cat1 = new Cat("Kochi", 4, "blue");
console.log(cat1);
cat1.meow();
cat1.eat();
