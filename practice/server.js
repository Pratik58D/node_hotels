
//exporting from another file ie ; node.js
const notes = require("./node.js")
// console.log(notes)

let name =  notes.name;
console.log(name)

let sum = notes.sum (10,30);
console.log(sum);




///fs and os module
let fs = require("fs");
let os = require("os");


let user = os.userInfo();

console.log(user)
console.log(user.username)

fs.appendFile("greeting.txt", "yo" + user.username + "!\n",()=>{
    console.log("file is created")
}); 


// console.log(os) 