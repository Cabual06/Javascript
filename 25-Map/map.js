
// .map() = accepts a callback and applies that function to each element of an array, then return a new array.


const numbers = [1,2,3,5,6];

const squares = numbers.map(square);    // put number.map to square variable becuase you uses return

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}


 ///////////////////////////////////////////////////////////////
 

const students = ["Spongebob", "Patrick", "Sandy"];

const studUpper = students.map(upperCase); //

function upperCase(element){
    return element.toUpperCase();
}

console.log(studUpper);
