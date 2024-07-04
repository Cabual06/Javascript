
// setTimeout() = function in javascript that allows you to schedule the execution of a function after an amount of time(milliseconds). TImes are approximate (varies based on the workload of the javascript runtime environment).

// setTimeout(callback, delay);


//////////////////////////////////////////////

// With Callbacks

function sayHello(){
    console.log("Hello!");
}

setTimeout(sayHello, 5000);

//////////////////////////////////////////////

// With anonymous function

setTimeout(function(){
    console.log("Hello World!");
}, 6000);

//////////////////////////////////////////////

// With arrow functions

setTimeout(() => {
    console.log("Hello Arrow!");
}, 7000);


//////////////////////////////////////////////

const sayHi = (name) => {
    console.log(`Hi ${name}`);
}

sayHi("Ferdinand")

//////////////////////////////////////////////