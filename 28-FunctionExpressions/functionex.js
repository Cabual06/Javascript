

// Function Declarations = define a reusable block of code that performs a specific tasks


// Example 

function Name(){
    console.log("Hello World");
}


/////////////////////////////////////////////////////////////


// Function Expression = a way to define functions as values or variables



const hello = function(){
    console.log("hello!");
}

hello();


/////////////////////////////////////////////////////////////


const hello = function(){
    console.log("Hello World");
}

// hello();              // Call the function expression

setTimeout(hello, 3000); // Pass hello function as argument to setTimeout

/////////////////////////////////////////////////////////////

const hello = (name) => {  // "name" is parameter
    console.log(`Hello ${name}`);
}

hello("Ferdinand"); // arguments


/////////////////////////////////////////////////////////////

setTimeout(function(){                // Same result but the Whole function is passed as argument
    console.log("Hello World");
},3000);


setTimeout(function(){
    console.log("Im Ferdinand Cabual");
},3000);


/////////////////////////////////////////////////////////////


const numbers = [2,4,6,8,10];
const square = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(square);
