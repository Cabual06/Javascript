

// DOM navigation = The process of navigating through the structure of an HTML document using javascript.

// .firstElementChild         = first element
// .lastElementChild          = last element
// .nextElementSibling        = chose the next sibling element
// .previousElementSibling    = chose the previous sibling element.. reverse of nextsibling
// .parentElement             = chose the parent element
// .children                  = chose the child elements  


// ------------------- .firstElementChild ------------------- //

const element = document.getElementById("fruits");

const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "red";

//////////////////////////////////////////////////////////////////////////////////

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "red";
})


//////////////////////////////////////////////////////////////////////////////////


// ------------------- .lastElementChild ------------------- //


const element2 = document.getElementById("vegetables");

const lastChild = element2.lastElementChild;

lastChild.style.backgroundColor = "green";

 
//////////////////////////////////////////////////////////////////////////////////

const animal = document.createElement("h1");

animal.textContent = "Animals";
animal.style.color = "red";
animal.style.backgroundColor = "green";
 
document.body.append(animal);
