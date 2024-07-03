// Spread Operator = ... allows an iterable such as an aaray or string to be expanded into separate elements. (Unpacks the elements)

let number = [1, 2, 3, 4, 5];
let maxNum = Math.max(...number); // Unpacks the array number
let minNum = Math.min(...number); // Unpacks the array number

console.log(number);
console.log(maxNum); 
console.log(minNum); 

let username = "Ferdinand";
let letter = [...username].join("-"); // Spread the username

console.log(letter);

let fruits = ["Apple", "Banana", "Orange"];
let vegetables = ["Potatoes", "Celery", "Eggplant"];

let allItems = [...fruits, ...vegetables]; // Store fruits and vegetables in allItems variable

console.log(allItems);