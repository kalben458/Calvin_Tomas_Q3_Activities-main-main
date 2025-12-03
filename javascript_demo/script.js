// console.log("Hello, welcome to JavaScript!");

// //change text content
// document.getElementById("btnText").addEventListener("click", function() {
//     document.getElementById("demo").textContent = "gege";
// });

// //change image source
// document.getElementById("btnColor").addEventListener("click", function() {

//    const div = document.getElementById("myDiv");
//    div.style.color= "lightblue";

// });

// //hide div
// document.getElementById("btnHide").addEventListener("click", function() {
//     document.getElementById("myDiv").style.display = "none";

// });
// //show div
// document.getElementById("btnShow").addEventListener("click", function() {
//     document.getElementById("myDiv").style.display = "block";
// });


// //change image
// document.getElementById("btnImage").addEventListener("click", function() {
//     document.getElementById("myImage").src = "Justine111.jpg";
// });


// //alert
// document.getElementById("btnAlert").addEventListener("click", function() {
//     alert("You look a lot like my next partner."); 
    

// });             

//console log

//Control Floe in Javascript
//Conditional Statements (if/else)
//Switch Statements   

//checking if the user is old enough to enter your site
// const userAge = 19;
// if(userAge >= 18){
//     console.log("Welcome to my site!!")
// }else{
//     console.log("Bawal, ka dito suri")
// }

// //grading system
// const score = 85;
// if (score >= 98){
//    console.log("With Highest Honors")
// }else if (score >=95){
//   console.log("With High Honors")
// }else if(score >= 90){
//   console.log("With Honors")
// }




//#1 for loop
for(let i = 0; i < 10; i++){
    console.log(i);
}




// javascript array
const cars = ["Toyota", "Honda", "Ford"];

cars.push("Chevrolet");
cars.pop("Toyota");

console.log(cars.length);


const fruits = ["Apple", "Banana", "Orange", "Mango"];

for(let i = 0; i < fruits.length -1; i++){

    console.log("Fruits #", i, " ", fruits[i]);

}


//Mixing elements type
const mixedArr = [12, "Hello", true, 95.54, "World"];
console.log(mixedArr.length);

//for loop vs forEach
let scores = [90, 85, 78, 92, 88];

for (let b = 0; b < scores.length; b++) {
    console.log("Index", b, ":", scores[b]);
}


for(let score of scores){

console.log("Score:", score);
}


const colors = ["Red", "Blue","Green", "Yellow"];

console.log(colors.indexOf("Green"));
console.log(colors.indexOf("Red"));

//using splice to remove and add elements
colors.splice(1,1, "Black");
console.log(colors);

//using map, fighter, and reduce
const ages = [18, 22, 16, 25, 30, 15];
console.log("Original Ages:", ages);


//mp tranform each element
let agesNextYear = ages.map(function(age){
return age + 1;
});

console.log(AgesNextYear);
let adultAges = ages.filter(function(age){
    return age >= 18;
});

console.log(adultAges);