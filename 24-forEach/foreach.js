
// forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element.

// array.forEach(callback);
// element, index, array are provided


let fruits = ["apple", "orange", "banana", "mango"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element){
    console.log(element);
}


//////////////////////////////////////////////////////////////


let numbers = [1,2,3,4,5];


numbers.forEach(double);
numbers.forEach(square);  // Pass the square function as arguments
numbers.forEach(display); // Pass the display function as arguments


function double(element, index, array){   // element,index,array are provided
    array[index] = element * 2;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function display(element){ // Element is provided. The element is the array
    console.log(element);
}


//////////////////////////////////////////////////////////////


let name = ["Cabual", "Abugan", "Oira","Marcelo"];

name.forEach(lowerCase); // take the array, use the forEach method and pass the function as callback

name.forEach(display); 


/////////////////////////////////////////////////////////////

function upperCase(element, index, array){ 
    array[index] = element.toUpperCase();
}

/////////////////////////////////////////////////////////////

function lowerCase(element, index, array){ 
    array[index] = element.tolowerCase();
}

/////////////////////////////////////////////////////////////

function display(element){
    console.log(element);
}


