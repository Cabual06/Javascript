

// STEP  1: CREATE ELEMENTS

const new1 = document.createElement("h1");      // Create h1 element


//---------------------------------------------------------------------------//


// STEP 2: ADD ATTRIBUTES / PROPERTIES

new1.textContent = "I like pizza";     // SET THE CONTEXT
new1.id = "myH1";                      // SET ID TO new1
new1.style.color = "red";              // SET STYLE
new1.style.textAlign = "center";       // ALIGN CENTER




//---------------------------------------------------------------------------//


// STEP 3: APPEND ELEMENT TO DOM

// document.body.append(new1);                          // ADD TO THE LAST
// document.body.prepend(new1);                         // ADD TO THE FIRST
// document.getElementById("box1").append(new1);        // ADD ELEMENT TO EXISTING ELEMENT
// document.getElementById("box1").prepend(new1);       // ADD TO FIRST


// const box2 = document.getElementById("box3");         // INSERT BETWEEN
// document.body.insertBefore(new1, box2);


//---------------------------------------------------------------------------//



// REMOVE HMTML ELEMENT

//  document.getElementById("box1").removeChild(new1);     // Remove Child


 //---------------------------------------------------------------------------//


 const newListItem = document.createElement("li");          // CREATE NEW HTML ELEMENT

newListItem.textContent = "coconut";                        // ADD TEXTCONTENT
newListItem.id = "coconut";                                 // ADD ID
newListItem.style.fontWeight = "bold";                      // ADD FONTWEIGHT
newListItem.style.fontSize = "30px";                        // ADD FONTSIZE
newListItem.style.backgroundColor = "lightgreen";           // ADD BACKGROUND COLOR

 document.getElementById("fruits").append(newListItem);     // ADD / APPEND TO FRUITS DIV


 ///////////////////////////////////////////////////


 const item = document.createElement("li");

 item.textContent = "durian";
 item.id = "durian";
 item.style.fontWeight = "bold";
 item.style.fontSize = "30px";
 item.style.backgroundColor = "lightblue";

 document.getElementById("fruits").append(item);
//  document.body.append(item);


const item2 = document.createElement("li");

item2.textContent = "mango";
item2.id = "mango";
item2.style.fontWeight = "bold";
item2.style.fontSize = "30px";
item2.style.backgroundColor = "lightpink";

document.getElementById("fruits").append(item2);