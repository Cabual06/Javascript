/* closure = A function defined inside of another function, the inner function has access to the variables and scope of the outer function. Allow for private and state maintenance.
Used in JS Frameworks: React, Vue, Angualar. */

///////////////////////////////////////////////////////////////////////

// the inner function has access to everthing within outer function
function outer(){

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();                    // need to call the inner function somewhere inside the outer function
}

message = "Goodbye";            // outer the scope or the outer function you cant access anything like variables 

outer();


function one(){

    let message1 = "Hello world"

    function two(){
        console.log(message1);
    }

    two();
}

one();