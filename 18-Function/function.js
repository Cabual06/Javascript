// function = a section of reusable code. Declare code once, use it whenever you want. Call the function to execute the code.Call
// returning variable is preferable than setting global variables


// return function = store the result in the variable

function happyBirthday(userName, age){   // Parameters

    console.log(`Happy Birthday ${userName}`);
    console.log(`You are ${age} years old!`);
}


// Arguments = data that you're send to function

happyBirthday("Ferdinand", 25); // Calls the function to execute the code
happyBirthday("JayAnn", 28);

///////////////////////////////////////////////////////////////////////////////////////////////////////


function happyBirthday(userName, age){
    console.log(`Happy birthday to you ${userName}`);
    console.log(`You are ${age} Years old`);
  }
   
  happyBirthday("Ferdinand", 25);
  


///////////////////////////////////////////////////////////////////////////////////////////////////////


function addNumber(x, y){
    let result = x + y;
    return result;                  // use return to store the "result" in variables
}

let answer = addNumber(5, 5);      // Store the answer in variables
console.log(answer);


// Shorthand

function addNumber(x,y){
    return x + y;
}

console.log(addNumber(5, 5));



///////////////////////////////////////////////////////////////////////////////////////////////////////
``1
function isEven(number){

    if(number % 2 ===0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(10));




///////////////////////////////////////////////////////////////////////////////////////////////////////


function isValidEmail(email){

    if(email.includes ("@")){
        return true;
    }else{
        return false;
    }
}

console.log(isValidEmail("ef@gmail.com"));




///////////////////////////////////////////////////////////////////////////////////////////////////////


function isValidAge(age){

    if(age >= 18){
        return true;
    }else{
        return false;
    }
}

console.log(isValidAge(18));



///////////////////////////////////////////////////////////////////////////////////////////////////////


function isGender(gender){

    if(gender == "Male"){
        return "Male";
    }else{
        return "Female";
    }
}

console.log(isGender("Female"));


///////////////////////////////////////////////////////////////////////////////////////////////////////


function isEven(number){

    if(number % 2 === 0){
        return true;
    }else {
        return false;
    }
}

console.log(isEven(10));


///////////////////////////////////////////////////////////////////////////////////////////////////////


function isValidEmail(email){

    if(email.includes("@")){
        return true;
    }else{
        return false;
    }
}

console.log(isValidEmail("efcabual@gmail.com"));


///////////////////////////////////////////////////////////////////////////////////////////////////////


let number = 4;
let anotherNumber = 3;

function add(n1, n2){
    // console.log(n1 + n2);
    return n1 + n2;
}


function multiply(n1, n2){
    console.log(n1 * n2);
}

let sum = add(number, anotherNumber);
multiply( prompt ("Enter a number:"), sum);



// Return function

function add(x, y){
    // let result = x + y;
    return x + y;
  }
  
  let answers = add(3,5);
  console.log(answer);

  // console.log(add(3,5));



///////////////////////////////////////////////////////////////////////////////////////////////////////

// Without using return function

function add(a,b){
    let result = a + b;
}

const result = add(5,7);

console.log(result);        // Undefined


///////////////////////////////////

// function can use function of another function.. // use return 

function sample(){
    const randomNumber2 = sample2();
    console.log(randomNumber2);
}

function sample2(){
    return Math.floor(Math.random() * 100);
}