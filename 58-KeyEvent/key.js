
// eventListener = events: keydown, keyup
// .document.addEventListener(event, callback);
// ADD EVENTLISTENER TO THE DOCUMENT.. / document.AddEventListener()

const key = document.getElementById("key");

document.addEventListener("keydown", (event) => {
    key.style.backgroundColor = "red";
    key.textContent = "😡";
});

document.addEventListener("keyup", (event) => {
    key.style.backgroundColor = "lightblue";
    key.textContent = "😀";
})

const movement = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){

        switch(event.key){
            case "ArrowUp":
                y -= movement;
                break;
            case "ArrowDown":
                y += movement;
                break;
            case "ArrowLeft":
                x -= movement;
                break;
            case "ArrowRight":
                x += movement;
                break;  
        }

        key.style.top = `${y}px`;
        key.style.left = `${x}px`;

    }
})