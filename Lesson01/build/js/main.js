"use strict";
let username = 'Ruby';
console.log(username);
// declare with type
let a = 12;
let b = 6;
let c = 2;
// typescript give error
// but it works for js
console.log(a / b);
console.log(c * b);
// Use --eminOnError: true in tsconfig.json 
// to control the error
// tsc -w 
