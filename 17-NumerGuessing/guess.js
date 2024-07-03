let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random()* (maxNum-minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while(running){
    
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);

    guess = Number(guess); // Convert string to number
    //console.log(typeof guess); // Console type if string or number


    // Nan = Not a Number


    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);

    }else if(guess < minNum || guess > maxNum){
        window.alert(`Please enter a valid Number`);

    }else{
        attempts++;

        if(guess < answer){
            window.alert(`Your guess is too low`);

        }else if(guess > answer){
            window.alert(`Your guess is too high`);
            

        }else{
            window.alert(`Your guess is Correct, The answer is ${answer}. It took you ${attempts} times to guess`);
            running = false;
        }
    }

} 