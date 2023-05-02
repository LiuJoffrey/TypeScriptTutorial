let username = 'Ruby'
console.log(username)

// declare with type
let a: number = 12
let b: number = 6
let c: number = 2

// typescript give error
// but it works for js
console.log(a / b)
console.log(c * b) 

// Use --eminOnError: true in tsconfig.json 
// to control the error

// tsc -w 