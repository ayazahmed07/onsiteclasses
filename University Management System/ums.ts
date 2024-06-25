import inquirer from "inquirer";
import chalk from "chalk";

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getname() {}
}

class Student extends Person {
  static staticrollnumber = 0;
  rollnumber: number;
  courses: string[] = [];

  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
    this.rollnumber = ++Student.staticrollnumber;
  }

  registerforcourses(course: string) {
    this.courses.push(course);
  }
}

class Instructor extends Person {
  salary: number;
  courses: string[] = [];

  constructor(name: string, age: number, gender: string, salary: number) {
    super(name, age, gender);
    this.salary = salary;
  }

  assigncourse(course: string) {
    this.courses.push(course);
  }
}

class Course {
  static staticId: number = 1500;
  id: number;
  coursename: string;
  students: Student[] = [];
  instructor: Instructor[] = [];

  constructor(coursename: string) {
    this.coursename = coursename;
    this.id = ++Course.staticId;
  }

  addstudent(std: Student) {
    this.students.push(std);
  }
  setInstructor(inst: Instructor) {
    this.instructor.push(inst);
  }
}

class Department {
  deptname: string;
  courses: Course[] = [];

  constructor(deptname: string) {
    this.deptname = deptname;
  }

  addCourse(course: Course) {
    this.courses.push(course);
  }
}

const students: Student[] = [];
const insturctor: Instructor[] = [];
const course: Course[] = [];
const Deprt: Department[] = [];

const Exit = false;

while (!Exit) {
  let userinput = await inquirer.prompt([
    {
      name: "userinput",
      type: "list",
      message: "What do you want to do?",
      choices: [
        "Add Student",
        "Add Instructor",
        "Add Course",
        "Add Department",
        "Enroll Student",
        "View Students",
        "View Instructor",
        "View Courses",
        "View Departments",
        "View Enrollments",
        "Exit",
      ],
    },
  ]);

  const input = userinput.userinput;

  if (input === "Add Student") {
    const Addstudent = await inquirer.prompt([
      {
        name: "studentname",
        type: "input",
        message: "Please enter student name?",
        validate: (input) => {
          if (!input.trim()) {
            return chalk.bold.red("Please enter student name!");
          } else if (/\d/.test(input)) {
            return chalk.bold.red("Name should not contain numbers!");
          }
          return true;
        },
      },
      {
        name: "studentage",
        type: "input",
        message: "Please enter student age?",
        validate: (input) => {
          const age = parseInt(input, 10);
          if (isNaN(age) || age <= 0 || age >= 100) {
            return chalk.bold.red("Please enter a valid age!");
          }
          return true;
        },
      },

      {
        name: "gender",
        type: "list",
        message: "Please select your gender?",
        choices: ["Male", "Female"],
      },
    ]);

    const addstdt = new Student(
      Addstudent.studentname,
      parseInt(Addstudent.studentage),
      Addstudent.gender
    );
    students.push(addstdt);
    console.log(chalk.green("Student Added Successfuly"));
  } else if (input === "Add Instructor") {
    const addInstructor = await inquirer.prompt([
      {
        name: "instname",
        type: "input",
        message: "Please enter instructor name?",
        validate: (input) => {
          if (!input.trim()) {
            return chalk.bold.red("Please enter instructor name!");
          } else if (/\d/.test(input)) {
            return chalk.bold.red("Name should not contain numbers!");
          }
          return true;
        },
      },
      {
        name: "instage",
        type: "input",
        message: "Please enter instructor age?",
        validate: (input) => {
          const age = parseInt(input, 10);
          if (isNaN(age) || age <= 0 || age >= 100) {
            return chalk.bold.red("Please enter a valid age!");
          }
          return true;
        },
      },

      {
        name: "gender",
        type: "list",
        message: "Please select your gender?",
        choices: ["Male", "Female"],
      },

      {
        name: "salary",
        type: "input",
        message: "Please enter instructor salary?",
        validate: (input) => {
          const salary = parseInt(input, 10);
          if (isNaN(salary) || salary <= 0 || salary >= 1000000) {
            return chalk.bold.red("Please enter a valid salary!");
          }
          return true;
        },
      },
    ]);

    const addInst = new Instructor(
      addInstructor.instname,
      addInstructor.instage,
      addInstructor.gender,
      addInstructor.salary
    );
    insturctor.push(addInst);
    console.log(chalk.green("Instructor Added Successfuly"));
  } else if (input === "Add Course") {
    const courseadd = await inquirer.prompt([
      {
        name: "coursname",
        type: "input",
        message: "Please enter course name?",
        validate: (input) => {
          if (!input.trim()) {
            return chalk.bold.red("Please enter course name!");
          } else if (/\d/.test(input)) {
            return chalk.bold.red("Name should not contain numbers!");
          }
          return true;
        },
      },
    ]);

    const addcour = new Course(courseadd.courname);
    course.push(courseadd);
    console.log(chalk.green("Course Added Successfuly"));
  } else if (input === "Add Department") {
    const adddept = await inquirer.prompt([
      {
        name: "deptname",
        type: "input",
        message: "Please enter department name?",
        validate: (input) => {
          if (!input.trim()) {
            return chalk.bold.red("Please enter department name!");
          } else if (/\d/.test(input)) {
            return chalk.bold.red("Name should not contain numbers!");
          }
          return true;
        },
      },
    ]);

    const adddepartment = new Department(adddept.deptname);
    Deprt.push(adddepartment);
    console.log(chalk.green("Department Added Successfuly"));
  } else if (input === "View Students") {
    console.log(chalk.blue.bold(`List of Students`));
    students.forEach((students, index) =>
      console.log(
        `${index + 1}, Student Name: ${students.name}, Age: ${
          students.age
        }, Gender: ${students.gender}, Roll Number: ${students.rollnumber}`
      )
    );
  } else if (input === "View Instructor") {
    console.log(chalk.blue.bold(`List of Instructor's`));
    insturctor.forEach((insturctor, index) =>
      console.log(
        `${index + 1}, Instructor Name: ${insturctor.name}, Age: ${
          insturctor.age
        }, Gender: ${insturctor.gender}, Salary: ${insturctor.salary}`
      )
    );
  } else if (input === "View Courses") {
    console.log(chalk.blue.bold(`List of Courses`));
    course.forEach((course, index) =>
      console.log(
        `${index + 1}, Course Name: ${course.coursename}, Course ID: ${
          course.id
        }}`
      )
    );
  } else if (input === "View Departments") {
    console.log(chalk.blue.bold(`List of Department's`));
    Deprt.forEach((Deprt, index) =>
      console.log(`${index + 1}, Department Name: ${Deprt.deptname}`)
    );
  } else if (input === "Exit") {
    break;
  }
}

// const student1 = new Student("Ayaz", 29, "Male");
// const student2 = new Student("Ali", 29, "Male");

// const instructor1 = new Instructor("Farukh", 56, "Male", 50000);
// const instructor2 = new Instructor("Habib", 57, "Male", 60000);

// const course1 = new Course("Block Chain");
// const course2 = new Course("Metaverse");

// course1.addstudent(student1);
// course1.addstudent(student2);
// course2.addstudent(student1);
// course2.addstudent(student2);

// course1.setInstructor(instructor1);
// course2.setInstructor(instructor2);

// const d1 = new Department("Computer Science");
// d1.addCourse(course1);

// const users: Person[] = [];

// let condition = true;

// while (condition) {
//
