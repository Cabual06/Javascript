// Rest Parameters = (...rest) allow a function to work with a variable number of arguments by bundling them into an array.


// function openFridge(...foods){
//     console.log(foods);
// }
// const food1 = "Pizza";
// const food2 = "Burger";
// const food3 = "Salad";
// const food4 = "Pasta";

// openFridge(food1, food2, food3, food4);

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result +=number;
    }
    return result;  
}

const total = sum(1,2,3);

console.log(total);