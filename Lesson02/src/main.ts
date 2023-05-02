let myName: string = "";
let meaningOfLife: number;
let isLoading: boolean;
let album: any; // like auto in c++
let album2: string | number; // union type
 
myName = "Joffrey";
myName = "Ruby";

meaningOfLife = 42;
isLoading = true;
album = 'Van Halen';
// album = 1094; // type any 
album2 = 1;

const sum = (a: number, b: string) => {
    return a + b;
}

let res = sum(meaningOfLife, album)
console.log(res)


let postId: string | number
let isActive: number | boolean

let re: RegExp = /\w+/g