

let fruits = ["Apple", "Orange", "Melon"]; // Create an Array

fruits[1] = "Coconut"; // Reasign value of an array
fruits.push("Mango"); // Add value or another value to the array
fruits.pop(); // Remove last value of the array
fruits.unshift("Banana"); // Add item in the first value of the array
fruits.shift(); // Remove first value of the array
fruits.sort(); // Sort the array alphabetical order
fruits.sort().reverse(); // Sort the array alphabetically in reverse order 


console.log(fruits); // Console whole array

console.log(fruits[0]); //Console specific array


let numOfFruits = fruits.length; // Getr the number of value in array
let index = fruits.indexOf("Apple"); // Find where the value is located in array

console.log(numOfFruits); // Console the length of the array
console.log(index);