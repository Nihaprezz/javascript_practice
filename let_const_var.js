//LET, CONST AND OTHER THINGS

// CONST ****
//'const' means that the identifier can't be assigned. 
const noChange = 'Cannot be changed' 

//however a const object can have its properties mutated. 
const testArray = [1,5,6]
testArray[2] = 10;
console.log(testArray)  //will print [1,5,10]
//console.log(testArray = [1,1,1]) //this will error out because you cannot re-assigned/re-declare a constant.

//when you don't need to reassign, 'const' is recommended so the usage more clear in the code.


//LET *****
//'let' will allow you to re-assign a variable. When used it is a primary indicator that the variables may be reassigned.
let testString = 'hello'
testString = 'goodbye'
console.log(testString) //will print goodbye since let was used to declare the variable


//SCOPING DIFFERNECES 

//  var - it is declared globally, or locally if declared inside of a function 
// EX:
var numArray = [];
for (var i = 0 ; i < 3; i++){
    numArray.push(i)
}

console.log(numArray);  //returns [0,1,2]
console.log(i)  //returns 3

//  let - it declares a block scope local variable, optionally initlizing it to a value; 
let x = 1; 
if (x === 1) {
    let x = 2;
    console.log(x)      //will print out 2 since its going to look for the let inside of the 'if' statement scope.
}

console.log(x)      // will print 1 . Will look for the x declared on its scope level. 

//const is similiar to let in reference to the scope they live in.


