"use strict";
// // Topic "Any" to pass any type of data if never shows error
function sum(agr1, arg2) {
    return agr1 + arg2;
}
console.log(sum(2, 3));
console.log(sum("2", "3"));
console.log(sum(2, "3"));
console.log(sum("2", 3));
console.log(sum(true, 3));
console.log(sum(false, 3));
// Make a login function which have 2 overlaods and will accept email and password
// second overlaod will accept only email
