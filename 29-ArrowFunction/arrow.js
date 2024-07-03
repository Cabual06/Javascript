
// Arrow function = a concise way to write functions expressins good for simple functions that you use only once. (parameters) => some code.


/////////////////////////////////////////////////////

// Normal Function 

function helloOne(){
    console.log("Hello First");
}

helloOne();


/////////////////////////////////////////////////////

// Normal Function Expression

const helloTwo = function(name){
    console.log("Hello Second");
}

helloTwo("cabual");

/////////////////////////////////////////////////////

// Arrow function 

const helloThree = (name) => console.log(`Hello ${name}`);                  // (name) is the matching parameters of Argument

helloThree("Ferdinand");                                                    // Arguments

/////////////////////////////////////////////////////


const helloFour = (name, age) => {console.log(`Hello ${name}`)
                            console.log(`You are ${age} Years Old`)};       // Use {} to add more statements.

helloFour("Cabual", 23);                                                    // Arguments


