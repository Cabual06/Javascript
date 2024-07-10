const box1 = document.getElementById('box1');

box1.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "orange";
})


const box2 = document.getElementById('box2');


box2.addEventListener("click", (event) => {
    box2.style.backgroundColor = "red";

})


const button1 = document.getElementById('button1');

button1.addEventListener("click", (event) => {
    box1.style.backgroundColor = "pink";
    box1.textContent = "Button 1 Press";
})

const button2 = document.getElementById('button2');

button2.addEventListener("click", (event) => {
    box2.style.backgroundColor = "yellow";
    box2.textContent = "Button 2 Press";
})