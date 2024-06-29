"use strict";
// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   makesound() {
//     console.log("General Sound");
//   }
// }
// class Cat extends Animal {
//   eyecolor: string;
//   skincolor: string;
//   age: number;
//   constructor(name: string, eyecolor: string, skincolor: string, age: number) {
//     super(name);
//     this.eyecolor = eyecolor;
//     this.skincolor = skincolor;
//     this.age = age;
//   }
//   makesound() {
//     console.log("MEAOW"); // this is called polymorphism where you extend class and make a new function in new class the previous one will be overwrite
//   }
// }
// let ob1 = new Cat("Kati", "Fair", "Light Brown", 2);
// ob1.makesound();
// console.log(ob1);
// class Dog extends Animal {}
// let Dog1 = new Dog("Rockcy");
// Dog1.makesound();
// console.log(Dog1);
// PUblic, Private, Protected is called access modefier
// Encapsulation
class Parent {
    constructor(parentname, secret, pincode) {
        this.parentname = "Anjum";
        this.secret = "something";
        this.pincode = 3456;
        this.parentname = parentname;
        this.secret = secret;
        this.pincode = pincode;
    }
    getSecret() {
        this.pincode;
    }
}
class Children extends Parent {
    constructor(parentname, secret, pincode, name) {
        super(parentname, secret, pincode);
        this.name = name;
    }
    getcall() { }
}
