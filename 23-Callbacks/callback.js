
// callback = a function that is passed as an argument to another function.
// To use callack, pass function as an argument to another function and invoke in inside the function

hello(leave);
goodbye();

function hello(callback){
    console.log("Hello");
    callback();
}

function goodbye(){``
    console.log("Goodbye");
}

function leave(){
    console.log("I'm leaving");
}

// ANOTHER EXAMPLE //
// sum(displayResult, 1, 5);

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayResult(result){
//     console.log(result);
// }

 
// EXAMPLE

function sum(callback,x,y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

sum(displayConsole,1,5);