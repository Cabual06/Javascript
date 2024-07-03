// let Username;
// let submit = document.getElementById("submit");


// submit.onclick = function() {
//     Username = document.getElementById("name").value;
//     document.getElementById("text").textContent = `Hello ${name}`;
// }

// let increaseButton = document.getElementById("Increase");
// let decreaseButton = document.getElementById("Decrease");
// let resetButtton = document.getElementById("Reset");
// let count =0;

// increaseButton.onclick = function() {
//     count++;
//     document.getElementById("count").textContent = count;
// }

const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const greenButton = document.getElementById("green");
const result = document.getElementById("result");

redButton.onclick = function(){
    result.textContent = "You chose Red";
}

blueButton.onclick = function(){
    result.textContent = "You chose Blue";
}

greenButton.onclick = function(){
    result.textContent = "You chose Green";
}