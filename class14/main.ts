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
  parentname: string = "Anjum";
  private secret: string = "something";
  protected pincode: number = 3456;

  constructor(parentname: string, secret: string, pincode: number) {
    this.parentname = parentname;
    this.secret = secret;
    this.pincode = pincode;
  }

  getSecret() {
    this.pincode;
  }
}

class Children extends Parent {
  name: string;

  constructor(
    parentname: string,
    secret: string,
    pincode: number,
    name: string
  ) {
    super(parentname, secret, pincode);

    this.name = name;
  }

  getcall() {}
}


// Interface

interface IDraw {

draw: () => void

}