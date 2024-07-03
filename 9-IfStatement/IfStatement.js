
// Run the code if the statement in while is True..End if false


let username;
let password;
let loggedIn = false;

while(!loggedIn){
    username = window.prompt(`Enter Username`);
    password = window.prompt(`Enter Password`);

    if(username === "Cabual" && password === "Cabual"){
        console.log(`Welcome ${username}`);
        loggedIn = true;    
    }
}