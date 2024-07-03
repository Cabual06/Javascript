function rollDice(){
 
    const numberofDice = document.getElementById("numberofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numberofDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value); // Insert the value in values array
        
        images.push(`<img src="dice_images/${value}.png">`)
    }

    diceResult.textContent = `dice: ${values.join(`,`)}`;
    diceImages.innerHTML = images.join(``);
}
