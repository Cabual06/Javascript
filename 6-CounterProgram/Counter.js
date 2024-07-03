let increaseButton = document.getElementById('increaseButton');
let decreaseButton = document.getElementById('decreaseButton');
let resetButton = document.getElementById('resetButton');
let count = 0;

increaseButton.onclick = function(){
    count++;
    document.getElementById('count').textContent = count;
}

decreaseButton.onclick = function(){
    count--;
    document.getElementById('count').textContent = count;
}

resetButton.onclick = function(){
    count = 0;
    document.getElementById('count').textContent = count;
} 