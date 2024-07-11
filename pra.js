

const box1 = document.getElementById('box1');

document.addEventListener("keydown", (event) => {
    box1.textContent = "Clicked";
    box1.style.backgroundColor = "red";
})

document.addEventListener("keyup", (event) => {
    box1.textContent = "Box1";
    box1.style.backgroundColor = "lightblue";
})