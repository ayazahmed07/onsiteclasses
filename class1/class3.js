"use strict";
let userName = "Ayaz";
let password = 123;
let smsCode = 456;
if (userName == "Ayaz" && password == 123) {
    console.log("Kindly provide OTP send to your registered number");
    if (smsCode == 456) {
        console.log("User Login Sucssesful");
    }
    else {
        console.log("Please enter correct user name and password");
    }
}
else {
    console.log("User name and password is not valid");
}
;
