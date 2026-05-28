const loc = "chennai";
let duplicateLoc = "Banglore";
duplicateLoc = "Sambar";
console.log(loc);//chennai
console.log(duplicateLoc);//sambar

const obj1 = {
    name:"nani",
    place:"piler"
}
 let babu ={ ... obj1,name : "naidu" } ; // only one value can be updated

 //babu.name = "naninaidu";
 console.log(obj1);//naninaidu
 console.log(babu);//naninaidu