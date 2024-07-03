
/* Object = A colletction of related properties and/or methods. 
            Can represent real world objects (people, products, places)
            object = {key:value, function()}

*/

///////////////////////////////////////////////////////////

const person1 = {                   // Creating an Object
    firstName: "Ferdinand",
    lastName: "Cabual",
    age: 24,
    isEmployed: false,
    sayHello: function(){
       console.log("Hello, Im Ferdinand")
    },
    hobby: () => console.log("My hobby is Sleeping"),   // Use arrow function
}

console.log(person1);               // Print out the Whole Object
console.log(person1.firstName);     // Print out the per properties
console.log(person1.lastName);
person1.sayHello();                 // Print the function
person1.hobby();                    // Print the function



///////////////////////////////////////////////////////////

const person2 =  {
    firstName: "Jayann",
    lastName: "Acabal",
    age: 31,
    isEmployed: true,
}

console.log(person2); 
console.log(person2.firstName); 
console.log(person2.lastName);


///////////////////////////////////////////////////////////

const person3 = {
    firstName: "Llyod",
    lastName: "Abugan",
    age: 24,
    isEmployed: false,
}

console.log(person3); 
console.log(person3.firstName); 
console.log(person3.lastName);


////

const person4 = {
    name: "ef",
    age: 24,
    course: "BSIT",
}

console.log(person4); 
console.log(person4.name);


///////////////////////////////////////////////////////////


const products = {

    names: "Smartphone",
    prices: 15000,
    rating: {           // add another properties inside properties
        stars: 4.9,
        count: 100
    }

}


console.log(products);
console.log(products.rating);
console.log(products.rating.stars);  // Print properties in another properties


///////////////////////////////////////////////////////////


// Convert Objects to JSON

console.log(JSON.stringify(products));


// Convert JSON back to Object

const jsonString = JSON.stringify(products);

console.log(jsonString);


// Save to local storage // localStorage only supports string to need to convert object to JSON String

localStorage.setItem("score", JSON.stringify(products));


// Load the score from local storage // Need to convert back to Object

const score = JSON.parse(localStorage.getItem("score"));


// Remove the score in localStorage

localStorage.removeItem("score");
