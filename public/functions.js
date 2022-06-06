"use strict";
let greet = () => {
    console.log("hello, world");
};
let myFunction;
myFunction = () => {
    console.log("hello, again");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
let salute;
salute = (name, greetings) => {
    console.log(`${name} says ${greetings}`);
};
