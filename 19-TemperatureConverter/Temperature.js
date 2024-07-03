const textBox = document.getElementById("textBox"); // id of textbox
const toFahrenheit = document.getElementById("toFahrenheit"); // id of Fahrenheit
const toCelsius = document.getElementById("toCelsius"); // id of Celsius
const result = document.getElementById("result"); // id of result

let temp;// get the value of textbox and store in temp variable


function Convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value); // convert to number
        temp = temp * 9 / 5 + 32; // Formula
        result.textContent = temp.toFixed(1) +  "Fahrenheit";

    }else if(toCelsius.checked){
        temp = Number(textBox.value); // convert to number
        temp = (temp - 32) * (5/9) // Formula
        result.textContent = temp.toFixed(1) +  "Celsius";

    }else{
        result.textContent = "Please choose a conversion";
    }
}