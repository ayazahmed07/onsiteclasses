import inquirer from "inquirer";
import chalk from "chalk";
class Person {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getname() { }
}
class Student extends Person {
    static staticrollnumber = 0;
    rollnumber;
    courses = [];
    constructor(name, age, gender) {
        super(name, age, gender);
        this.rollnumber = ++Student.staticrollnumber;
    }
    registerforcourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, gender, salary) {
        super(name, age, gender);
        this.salary = salary;
    }
    assigncourse(course) {
        this.courses.push(course);
    }
}
class Course {
    static staticId = 1500;
    id;
    coursename;
    students = [];
    instructor = [];
    constructor(coursename) {
        this.coursename = coursename;
        this.id = ++Course.staticId;
    }
    addstudent(std) {
        this.students.push(std);
    }
    setInstructor(inst) {
        this.instructor.push(inst);
    }
}
class Department {
    deptname;
    courses = [];
    constructor(deptname) {
        this.deptname = deptname;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const students = [];
const insturctor = [];
const course = [];
const Deprt = [];
let contcond = true;
let contcond1 = true;
let contcond2 = true;
let contcond3 = true;
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
        while (contcond) {
            const Addstudent = await inquirer.prompt([
                {
                    name: "studentname",
                    type: "input",
                    message: "Please enter student name?",
                    validate: (input) => {
                        if (!input.trim()) {
                            return chalk.bold.red("Please enter student name!");
                        }
                        else if (/\d/.test(input)) {
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
                {
                    name: "ask",
                    type: "confirm",
                    message: chalk.blueBright.bold("Would you like to add more students?"),
                    default: "true",
                },
            ]);
            const addstdt = new Student(Addstudent.studentname, parseInt(Addstudent.studentage), Addstudent.gender);
            students.push(addstdt);
            contcond = Addstudent.ask;
        }
        console.log(chalk.green("Student Added Successfuly \n"));
    }
    else if (input === "Add Instructor") {
        while (contcond1) {
            const addInstructor = await inquirer.prompt([
                {
                    name: "instname",
                    type: "input",
                    message: "Please enter instructor name?",
                    validate: (input) => {
                        if (!input.trim()) {
                            return chalk.bold.red("Please enter instructor name!");
                        }
                        else if (/\d/.test(input)) {
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
                {
                    name: "ask",
                    type: "confirm",
                    message: chalk.blue.bold("Would you like to add more instructors?"),
                    default: true,
                },
            ]);
            const addInst = new Instructor(addInstructor.instname, addInstructor.instage, addInstructor.gender, addInstructor.salary);
            insturctor.push(addInst);
            console.log(chalk.green("Instructor Added Successfuly \n"));
            contcond1 = addInstructor.ask;
        }
    }
    else if (input === "Add Course") {
        while (contcond2) {
            const courseadd = await inquirer.prompt([
                {
                    name: "coursename",
                    type: "input",
                    message: "Please enter course name?",
                    validate: (input) => {
                        if (!input.trim()) {
                            return chalk.bold.red("Please enter course name!");
                        }
                        else if (/\d/.test(input)) {
                            return chalk.bold.red("Name should not contain numbers!");
                        }
                        return true;
                    },
                },
                {
                    name: "ask",
                    type: "confirm",
                    message: chalk.blue.bold("Would you like to add more courses?"),
                    default: true,
                },
            ]);
            const addcour = new Course(courseadd.coursename);
            course.push(addcour);
            console.log(chalk.green("Course Added Successfuly \n"));
            contcond2 = courseadd.ask;
        }
    }
    else if (input === "Add Department") {
        while (contcond3) {
            const adddept = await inquirer.prompt([
                {
                    name: "deptname",
                    type: "input",
                    message: "Please enter department name?",
                    validate: (input) => {
                        if (!input.trim()) {
                            return chalk.bold.red("Please enter department name!");
                        }
                        else if (/\d/.test(input)) {
                            return chalk.bold.red("Name should not contain numbers!");
                        }
                        return true;
                    },
                },
                {
                    name: "ask",
                    type: "confirm",
                    message: chalk.blue.bold("Would you like to add more courses?"),
                    default: true,
                },
            ]);
            const adddepartment = new Department(adddept.deptname);
            Deprt.push(adddepartment);
            console.log(chalk.green("Department Added Successfuly \n"));
            contcond3 = adddept.ask;
        }
    }
    else if (input === "View Students") {
        if (students.length === 0) {
            console.log(chalk.bold.red("No student is added yet, Please add a student first."));
        }
        else {
            console.log(chalk.blue.bold(`\tList of Students`));
            students.forEach((students, index) => console.log(`${index + 1}, Student Name: ${students.name}, Age: ${students.age}, Gender: ${students.gender}, Roll Number: ${students.rollnumber}`));
            console.log("\n");
        }
    }
    else if (input === "View Instructor") {
        if (insturctor.length === 0) {
            console.log(chalk.bold.red("No instructor is added yet, Please add a instructor first."));
        }
        else {
            console.log(chalk.blue.bold(`\tList of Instructor's`));
            insturctor.forEach((insturctor, index) => console.log(`${index + 1}, Instructor Name: ${insturctor.name}, Age: ${insturctor.age}, Gender: ${insturctor.gender}, Salary: ${insturctor.salary}`));
            console.log("\n");
        }
    }
    else if (input === "View Courses") {
        if (course.length === 0) {
            console.log(chalk.bold.red("No course is added yet, Please add a course first."));
        }
        else {
            console.log(chalk.blue.bold(`\tList of Courses`));
            course.forEach((course, index) => console.log(`${index + 1}, Course Name: ${course.coursename}, Course ID: ${course.id}}`));
            console.log("\n");
        }
    }
    else if (input === "View Departments") {
        if (Deprt.length === 0) {
            console.log(chalk.bold.red("No department is added yet, Please add a department first."));
        }
        else {
            console.log(chalk.blue.bold(`\tList of Department's`));
            Deprt.forEach((Deprt, index) => console.log(`${index + 1}, Department Name: ${Deprt.deptname}`));
            console.log("\n");
        }
    }
    else if (input === "Exit") {
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
