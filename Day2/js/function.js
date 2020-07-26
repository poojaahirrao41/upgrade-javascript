hello();

function hello() {
    console.log("helloworld");
}


let greet = function() {
    console.log("function assigned to a variable")

}
greet();


let welcome = function(name = "pooja") {
    console.log(`name is ${name}`);
}
welcome("prasad"); //default value pass to the function


let addition = function(num1 = 0, num2 = 0) {
    sum = num1 + num2;
    //sum = +num1 + +num2;   //for conveting string into number
    return sum;
}
let result = addition(10, 20);
//let result=additon("10",true);
console.log(result);