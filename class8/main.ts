// Array

let fruits: string[] = ["Mango", "Pome", "Banana", "Grapes"];

// fruits.push("Apple"); // Add apple to the end

// fruits.pop(); // Remove apple to the end

// fruits.shift(); // Removes the first element "Mango"

// fruits.unshift("Kiwi"); // Add kiwi to the start 

// Slice

// let copy = fruits.slice(1,2) // it makes a copy of an array and return the index 

// console.log(copy);

// console.log(fruits);

let copyof = fruits.splice(1,1, "Orange"); // delete elements from index to the number of elements / we can also add elements

console.log(fruits);

console.log(copyof);
