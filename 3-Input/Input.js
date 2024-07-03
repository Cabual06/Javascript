// Accept User input

// easy way = windown prompt
// using text box

let Submit = document.getElementById("submit");
let userName;
let address;

document.getElementById("submit").onclick = function() {

    userName = document.getElementById("userName").value;
    address = document.getElementById("address").value;
    
    console.log(userName);
    console.log(address);
    
}

Submit.onclick = function() {

    userName = document.getElementById("userName").value;
    address = document.getElementById("address").value;

    // console.log(userName);
    document.getElementById("text1").textContent  = userName;
    console.log(address);
}