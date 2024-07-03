function isValidAge(age){

    if(age >= 18){
        return "You are allowed to enter this website";
    }else{
        return "You are not allowed to enter this website";
    }
}

console.log(isValidAge(17));


function isSubscribed(user){

    let subscribed = true;

    if(subscribed == true){
        console.log(`Thanks for subscribing ${user}`);
    }else{
        console.log("You are not subscribed!");
    }
}

isSubscribed("Ferdinand");


function isSubscribed(user){
    
    let subscribed = true;

    if(subscribed == true){
        return `Thank you for subscribing ${user}`;
    }
    else{
        return "You are not subscribed!";
    }
}

console.log(isSubscribed("Fedinand"));