"use strict";
// Async Function Javascript
function checkmarks() {
    return new Promise((resolve, reject) => {
        let marks = 91;
        setTimeout(() => {
            if (marks >= 90) {
                resolve("You are passed");
            }
            else {
                reject("You are failed");
            }
        }, 5000);
    });
}
checkmarks().then((fff) => { console.log(fff); }).catch((ee) => {
    console.log(ee);
});
