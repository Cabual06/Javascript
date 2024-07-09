
/* 

element selectors = Methods used to target and manipulate HTML elements.
They allow you to select one or multiple HTML elements from the DOM.

/*

1. document.getElementById();               // ELEMENT OR NUll
2. document.getElementsByCLassName();       // HTML COLLECTION
3. document.getElementsByTagName();         // HTML COLLECTION
4. document.querySelector();                // FIRST ELEMENT OR NUll
5. document.querySelectorAll();             // NODELIST

*/

///////////////////////////////////////////////////////////////////////////////////

/* getELementById("");  id=""*/ // NO (#) needed

const myHeading = document.getElementById('my-heading');  // no need to add (.)

myHeading.style.backgroundColor = "red";
myHeading.style.textAlign = "center";
myHeading.style.fontSize = "50px";
 

///////////////////////////////////////////////////////////////////////////////////

/* getElementsByClassName("");  class="" */ // NO (.) needed

const fruits = document.getElementsByClassName('fruits');

fruits[0].style.backgroundColor = "blue";           // Choose using index = [0]
fruits[1].style.backgroundColor = "green"
fruits[2].style.backgroundColor = "orange";

// Using enhance for loop

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "red";
// }


///////////////////////////////////////////////////////////////////////////////////

/* getElementsByTagName(""); tagname: h1, p, li*/

//Takes element by TagName example h1,h2,h3,h4,h5

const h2Elements = document.getElementsByTagName("h2");
const h3Elements = document.getElementsByTagName("h3");
const h4Elements = document.getElementsByTagName("h4");


// h2Elements[0].style.backgroundColor = "violet"   // Choose using index = [0]


// Using enhance for loop

for(let h2Element of h2Elements){

    h2Element.style.backgroundColor = "violet";
}
 
const listItems = document.getElementsByTagName("li");

listItems[0].style.backgroundColor = "pink";
listItems[1].style.backgroundColor = "magenta";
listItems[2].style.backgroundColor = "lavender";

listItems[3].style.backgroundColor = "lightblue";
listItems[4].style.backgroundColor = "lightgreen";
listItems[5].style.backgroundColor = "lightpink";


///////////////////////////////////////////////////////////////////////////////////

 // document.querySelector(); // 

 //Select the first matching element

const element = document.querySelector(".fruits"); // select the class of fruits

// element.style.backgroundColor = "yellow";


///////////////////////////////////////////////////////////////////////////////////


// document.querySelectorAll(); 


const foods = document.querySelectorAll(".foods");

foods.forEach(food => {
    food.style.backgroundColor = "red"; // Change color of all fruits2 elements to red
})

// foods[0].style.backgroundColor = "green";
// foods[1].style.backgroundColor = "orange";
// foods[2].style.backgroundColor = "brown";


//////////////////////////////////////////////////////


let object = document.querySelectorAll("div"); // (".class") ("#id") ("div")


for(let i = 0; i < object.length; i++){
    object[i].style.backgroundColor = "yellow";
}