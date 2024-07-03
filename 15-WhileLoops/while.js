// repeat some code WHILE condition is true

// let username = "";

// while(username === "" || username === null){
//     username = window.prompt("Enter username");
// }
//     console.log(`Hell0 ${username}`);

let LoggedIn = false;
let username;
let password;

while(!LoggedIn){
    username = window.prompt("Enter username");
    password = window.prompt("Enter password");

    if(username === "admin" && password === "123"){
        LoggedIn = true;
        console.log("You are logged in");
    }else{
        console.log("You are not logged in, Invalid username or password");
    }
}

