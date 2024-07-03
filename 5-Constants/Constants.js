// const = a variable that can't be changed

let pi = 3.14159;
let radius;
let circumference;

document.getElementById("submit").onclick = function() {
    radius = document.getElementById("text").value;
    circumference = 2 * pi * radius;
    // radius = Number(radius);
    document.getElementById("answer").textContent = circumference;
}