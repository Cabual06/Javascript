

// eventlistener = Listen for specific events to create interactive web pages.

// events: CLICK, MOUSEOVER, MOUSEOUT
// .addEventListener(event, callback); ex .addEventListener(event, changecolor);


////////////////////////////////////////////////////////////////////////////////

const myBox = document.getElementById('myBox');


// myBox.addEventListener("click", changeColor);

// function changeColor(event){
//     event.target.style.backgroundColor = "blue";
//     event.target.textContent = "You clicked";
// }

///////////////////////////////////////////////////////////////////////



//-- ANOTEHR WAY -- //

// myBox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "blue";
//     event.target.textContent = "You clicked";
// });

///////////////////////////////////////////////////////////////////////



//-- ARROW FUNCTION --//   NO NEED TO ENCLODE () IF YOU HAVE ONLY 1 PARAMETER

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "You clicked";
});


///////////////////////////////////////////////////////////////////////




const box2 = document.getElementById("box2");

box2.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "pink";
    event.target.textContent = "Hovered";
})

box2.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "Box 2:";
})


//////////////////////////////////////////////////////////////////////

const myButton = document.getElementById("myButton");

// myButton.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "red";
//     event.target.textContent = "Hovered";
// })

// myButton.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "green";
//     event.target.textContent = "Click Me";
// })

myButton.addEventListener("click", (event) => {
    box2.style.backgroundColor = "orange";
    box2.textContent = "Clicked";
})
myButton.addEventListener("mouseover", (event) => {     // CHANGE THE STATE OF BOX2 ON HOVER..REPLACE (event.target) to the VARIABLE OF SELECTED ITEM
    box2.style.backgroundColor = "red";
    box2.textContent = "Hovered";
})

myButton.addEventListener("mouseout", (event) => {
    box2.style.backgroundColor = "green";
    box2.textContent = "Click Me";
})





const box3 = document.getElementById("box3");

box3.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "orange";
})


const myButton2 = document.getElementById("myButton2");

myButton2.addEventListener("click", (eventlistener) => {
    box3.style.backgroundColor = "red";
    box3.textContent = "Clicked 2";
})



const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");

decrease.addEventListener("click", ()7t => {
    console.log("decrease");
});