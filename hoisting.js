//HOISTING PRATICES
function catName(name){
    console.log("My cat's name is " + name)
}

catName('Tigger')

// ^^ that works

catName2('Leo')

function catName2(name){
    console.log("My cat's name is " + name)
}

// ^^ this works as well even though we called the function first. Because the function catName2 gets hoisting to the top. No matter where variables or functions are declared hoisting will move them to the top of thier scope regardless if their scope is global or not.

//DECLARTION HOISTING EXAMPLES 

//Example 1 - Does not hoist 
var x = 1; //initialize x
console.log(x + " " + y) // '1 undefined
var y = 2; //initalize y 
    // Will not work because JavaScript only hoists declarations not intializations 

//Example 2 - Hoists 
var num1 = 3;  //Declare and initalize num1 ... not sure how this differs from the first example???? Though hoisting isnt needed on this one since its before the console.log

num2 = 4; //initalize num2
console.log(num1 + " "+ num2); //'3 4'
var num2;   //Declare num2 for hoisting .. This one gets pushed to the TOP! which then gets printed in the console.log

//Example 3 - Hoists 
a = 'Cran'; //initialize a
b = 'berry'; //initialize b 
console.log(a + ""+ b)
var a, b; //Declare both a & b for hoisting 

