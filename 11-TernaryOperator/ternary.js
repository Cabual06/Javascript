// Ternary Operator = a short to if() and else() statements helps to assign a variable based on condition condition? CodeIfTrue : codeIfFalse

// let age = 17;
// let message = age <=17 ? "You are not allowed to enter this website" : "You are allowed to enter this website";

// console.log(message);

const submit = document.getElementById('submit');
const yes = document.getElementById('Yes');
const no = document.getElementById('No');
const result = document.getElementById('text');

submit.onclick = function () {
    if(yes.checked){
        result.textContent = "You are a Student!";
    }else if(no.checked){
        result.textContent = "You are not a Student!";
    }
}