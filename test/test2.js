function greet(name,callback){
console.log("Hello " + name);
callback();
}
function callback(){
    console.log("Welcome");
}
let name = "nani";
greet(name,callback);