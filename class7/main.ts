// let user1: { name: string; age: Number; role: string } = {
//   name: "Ayaz ahmed",
//   age: 29,
//   role: "father",
// }; // added type of object

// // console.log(user1.age);

// type User = {
//   name: string;
//   age: number;
//   role: string;
//   children?: {
//     name: string;
//     age: number;
//   };
// }; // this is called type alias write q mark to keep it optional

// let user2: User = {
//   name: "Zahid",
//   age: 45,
//   role: "Cook",
//   children: {name: "Amal",
//   age: 2}
// };

// let user3: User = {
//   name: "Hafiz ahmed",
//   age: 56,
//   role: "Commi",
//   children: {name: "Zohaib",
//     age: 4
//   }
// };

// console.log(user3.name);
// console.log(user3.age);
// console.log(user3.role);

// console.log(user3.children?.age);

// Type Literal

// let traficlight: "Red" | "Yellow" | "Green"  = "Yellow"  // This is called union to store multiple data type

// let age: string | number

// age = 'Sixteen'

// console.log(age);

// type Student = {
//   name: string;
//   rollnumber: number;
// };

// type Teacher = {
//   name: string;
//   expereince: number;
// };

// let student1: Student = {
//   name: "Shahid",
//   rollnumber: 3434,
// };

// let teacher1: Teacher = {
//   name: "Hamza",
//   expereince: 4,
// };

// console.log(student1);
// console.log(teacher1);

// type Both = Teacher & Student; // Intersection

// let zaid: Both = {
//   name: "Zaid",
//   rollnumber: 5,
//   expereince: 6,
// };

// console.log(zaid);


