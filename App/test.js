const obj =
 {
   objname:"Nani",
   objage:22
}
const [name,age] = ["nani",23];
console.log(age, name)
//Destructuring
  const {
    objname,
    objage 
} = obj
  
console.log(objname,objage)