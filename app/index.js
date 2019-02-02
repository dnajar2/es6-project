// //arrow function
// import {fellowship, total} from "./fellowship";
//
// let values = [20,30,40];
// let double = values.map((n => n*2));
// console.log(double);
//
// //isolating
// let points = [7,16,21,4,3,22,5];
// let  highScores = points.filter( (n) =>  n > 15);
// console.log(highScores);
//
// //strings
// let b = `woo${"oo".repeat(50)}`;
// console.log(b);
// console.log("butterfly".startsWith("butter"));
// console.log("butterfly".endsWith("fly"));
// console.log("butterfly".includes("fly"));
// console.log("end of strings");
// //check numbers
// const addToCart = (item,number) =>{
//     return Number.isFinite(number) && Number.isSafeInteger(number)
// };
// console.log( addToCart('shirt',Math.pow(2,54)));
//
// import { fellowship } from './fellowship';
// console.log(fellowship);
// console.log(total);
//
// import  multiply from "./math";
// console.log(multiply(3,5));

// import Animal from './Animal';
// class Lion extends Animal{
//     constructor(name, height,color){
//         super(name, height); //calls parent constructor
//         this.color = color;
//     }
//
//     hello() {
//         console.log(`HI! I'm ${this.name} from Pride Rock`);
//     }
// }
//
// let son = new Lion("simba",2, "Golden");
// console.log(son);
// son.hello();
// class Calculator{
//     static multiply(a,b){
//         return a*b;
//     }
//     static add(a,b){
//         return a + b;
//     }
// }
//
// let a = Calculator.add(5,7);
// console.log(a);

// function Wizard(name,house,pet) {
//     this.name = name;
//     this.house = house;
//     this.pet = pet;
//
//     this.greet = () => `I'm ${this.name} from ${this.house}`
// }
//
// let harry = new Wizard("Harry Potter","Gryffindor","Owl");
// //using old function syntax
// Wizard.prototype.info = function(){
//   return `I have a ${this.pet} name ${this.pet_name}`
// };
// Wizard.prototype.pet_name;
//
// harry.pet_name = "Hedwig";
// console.log(harry.info());
let numbers = [5,7,8,13,17];
let numSet = new Set(numbers);
for(let element of numSet.values()){
    console.log(element);
}
console.log(numSet);