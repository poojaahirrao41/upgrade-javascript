//slice method
let arr = ["apple", "banana", "orange", "kiwi", "mango"];
let arr2 = ["cricket", "football", "hockey"];
console.log(arr.slice(1, 4)); //slice the elements

console.log(arr.reverse()); //reverse the array

console.log(Array.isArray(arr)); //check whether is array or not

console.log(arr.concat(arr2)); ///concat the array

//Appending the elements

//at the start
arr2.unshift("wolleyball");
console.log(arr2);

//at the end
arr2.push("batminton");
console.log(arr2);

// Removing the elements

//from the start

arr2.shift("batminton");
console.log(arr2);

//from the end
arr2.pop();
console.log(arr2)


//splice method
//change the content of array by adding or removing elements
//multiple replace elements
//syntax-array.splice(start,deletcount,replacevalues)
let names = ["pooja", "mina", "rani", "shivani", "prachi"];
console.log(names.splice(2, 2, ));