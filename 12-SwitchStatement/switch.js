// const Day = document.getElementById('day'); 
// const submit = document.getElementById('submit');
// const text = document.getElementById('text');

// let day;

// submit.onclick = function(){
//     day = parseInt(document.getElementById('day').value);

//     switch(day){
//         case day = 1:
//             text.textContent = "Today is Monday";
//         break;
//     }
// }


let day = 2;

switch(day){
    case 1:
        console.log('Today is Monday');
    break;
    case 2:
        console.log('Today is Tuesday');
    break;
    case 3:
        console.log('Today is Wednesday');
    break;
    case 4:
        console.log('Today is Thursday');
    break;
    case 5:
        console.log('Today is Friday');
    break;
    case 6:
        console.log('Today is Saturday');
    break;
    case 7:
        console.log('Today is Sunday');
    break;
    default:
        console.log('Invalid Day');
}