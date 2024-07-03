
// nested object = objects inside other objects.

/* example 
Person{
    address{
    },
    contact{
    }
}
*/

const person = {
    name: "Cab",
    age: 24,
    hobbies: ["Programming", "Playing"],    // Create arrays inside object
    address: {                              // Create nested object
        street: "Kasadja",
        city: "Dumaguete CIty",
    }
}

console.log(person);                       // Print out the Whole Object
console.log(person.name);                  // Print out the per properties
console.log(person.hobbies[0]);            // Print out the array per properties
console.log(person.address.street);        // Print the address property