console.log("Conditional Statements")

/*
1. If
2. If Else
3. If ElseIf else
4. Ternary
*/

let age = Number(prompt("Enter your age", 0));
//let age=+(prompt("Enter your age",0));

//let age = 18;
//console.log(age, typeof age);

/*
if (condition) {
   code to evaluate if condition is true 
}
*/
//age = '18'
//if (age === 18) {
//  console.log('you are an adult')
//}

if (1) {
    console.log("True") //Evaluate boolean value
}

// If else
age = 30;
voterCard = false;
if (age >= 18 && voterCard == false) {
    console.log('you are an adult but you dont have a voter card')
}

if (age == 25) {
    console.log("you are 25")
} else {
    console.log("you are not an adult");
}

if (age == 18) {
    console.log("your age is 18");
} else if (age == 20) {
    console.log("your age is 20");
} else {
    console.log("Hello")
}

// Ternary Operators
// syntax: conditon ? value if true : value if false

let age1 = 17;
//let age1=20;

//console.log(age1 >= 18 ? 'You are an adult' : 'You are not an adult');

let result = (age1 == 18) ? 'You are 18' :
    (age1 == 20) ? 'You are 20' :
    'Your age is neither 18 or 20';

console.log(result);