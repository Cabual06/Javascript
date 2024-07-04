/* Sort() = method used to sort elements of an array in place. 
            Sorts elements as strings in lexigraphic order, not alphabet
            lexicographic order = (alphabetical + numbers + symbols) as strings
*/

/*

let fruits = ["Banana", "Apple", "Pineaple", "Coconut", "Durian"];

fruits.sort();          // Sort items in array


console.log(upper);

*/

const people = [{name: "John", age: 24},
                {name: "Cabual", age: 23},
                {name: "Abugan", age: 26},
]

people.sort((a, b) => a.age - b.age);

console.log(people);