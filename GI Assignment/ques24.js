"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let cars = "subaru";
let age = 25;
let arr = [1, 2, 3, 4, 5];
// test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru');
//test 2 
console.log("Is car === 'subaru'? I predict True.");
console.log(cars === 'Subaru');
// test 3
console.log("Is car != 'toyota'? I predict True.");
console.log(cars != 'toyota');
//test 4
console.log("Is car !== 'subaru'? I predict True.");
console.log(cars !== 'subaru');
//test 6 lowercase
console.log("Is car.toLowercase() == 'subaru'? I predict True.");
console.log(cars.toLocaleLowerCase() == 'subaru');
//test 6
console.log("Is car.toLowercase() === 'subaru'? I predict True.");
console.log(cars.toLocaleLowerCase() === 'Subaru');
// test 7 numerical 
console.log("is age ==25 predict True.");
console.log(age == 25);
//test 8 
console.log("is age != 25 predict True.");
console.log(age != 25);
// test 9 
console.log("is age < 25 predict True.");
console.log(age < 25);
//test 10 
console.log("is age > 25 predict True.");
console.log(age > 25);
//test 11
console.log("is age >= 25 predict True.");
console.log(age >= 25);
// test 12
console.log("is age > 20 && age < 30 predict True");
console.log(age > 20 && age < 30);
//test 13
console.log("is age > 25 || age < 30 predict True");
console.log(age > 25 || age < 30);
//test 14array
console.log("3 in number pridict True");
console.log(arr[3]);
//test 15
console.log("5 not in number pridict True");
console.log(arr[5]);
