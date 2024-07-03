

function first(callback){                   // callback is used as parameter for "Third fucntion"
    console.log("First Function");
    callback();                             // Call the function third 
}


function second(){
    console.log("Second Function");
}


function third(){                          // I'll pass the "function third" as argument to function first
    console.log("Third Function");
}

first(third);
second();



//////////////////////////////////////////////////////////////////
 


function sum(callback, x, y){
    let result = x + y;                   // Create local variables to contain the result of x + y
    callback(result);                     // Pass the result to the callback function. // The sum function passed a argument "result" to displayPagefunction
}

function displayPage(result){            // Accept the "result" of sum function as argument
    document.getElementById("myH1").textContent = result;
}

sum(displayPage, 5,10);
 
 
function displayConsole(result){         // Parameter = the argument we received from sum function
    console.log(result);
}

//////////////////////////////////////////////////////////////////


// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function display(result){
//     console.log(result);
// }


// sum(display, 5, 6);


//////////////////////////////////////////////////////////////////

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function display(result){
//     console.log(result);
// }

// sum(display);

function sum(callback,x,y){
    let result = x + y;
    callback(result);


}
/////////////////////////////////////////////////////////////////


function display(result){
    console.log(result);
}

sum(display,5,10);

