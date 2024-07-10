const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");


myButton.addEventListener("click", (event) => {

    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "Hide";
    }else{
        myImg.style.display = "none";       // access the display
        myButton.textContent = "Show";
    }

    // if(myImg.style.visibility === "hidden"){
    //     myImg.style.display = "visible";
    //     myButton.textContent = "Hide";
    // }else{
    //     myImg.style.visibility = "hidden";       // access the display
    //     myButton.textContent = "Show";
    // }
});