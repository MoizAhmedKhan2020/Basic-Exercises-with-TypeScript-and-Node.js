// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var arr = ["Mango", "Apples", "Oranges"];
//equality and inequality
console.log("Test 1 Mango == Apple", arr[0] == arr[1]);
console.log("Test 2 Oranges == Oranges", arr[2] == "Oranges");
//lower case function
var testFruit = "APPle";
console.log("Test 3 Apple === apple", testFruit.toLowerCase() === arr[0]);
//Numerical tests
var a = 12;
var b = 4;
console.log("\na = 12 & b =4\n");
console.log("Is a a == b", a == b); // false
console.log("Is a a != b", a != b); // true
console.log("Is a a >= b", a >= b); // true
console.log("Is a a <= b", a <= b); // false
// And & Or Operations
console.log("Is a a == b && a<= b", a == b && a <= b);
console.log("Is a a != b && a>= b", a != b && a >= b);
console.log("Is a a != b || a<= b", a != b || a <= b);
console.log("Is a a == b || a>= b", a == b || a >= b);
console.log("Is a a == b || a<= b", a == b || a <= b);
console.log(arr.includes("Apples"));
console.log(arr.includes("grape"));
