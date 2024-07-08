

// STEP  1: CREATE ELEMENTS

const new1 = document.createElement("h1");


//---------------------------------------------------------------------------//


// STEP 2: ADD ATTRIBUTES / PROPERTIES

new1.textContent = "I like pizza";
new1.id = "myH1";                      // SET ID TO new1
new1.style.color = "red";              // SET STYLE
new1.style.textAlign = "center";       // ALIGN CENTER




//---------------------------------------------------------------------------//


// STEP 3: APPEND ELEMENT TO DOM

// document.body.append(new1);                          // ADD TO THE LAST
// document.body.prepend(new1);                         // ADD TO THE FIRST
// document.getElementById("box1").append(new1);           // ADD ELEMENT TO EXISTING ELEMENT
document.getElementById("box1").prepend(new1);          // ADD TO FIRST



//---------------------------------------------------------------------------//



// REMOVE HMTML ELEMENT



