

// Date (year, month, day, hour, minute, second, millisecond)

// const date = new Date(2024, 5, 8, 8, 30, 30,30);

// const date2 = new Date("2024-01-02T12:00:00Z");

// console.log(date);
// console.log(date2);

// get date

const date = new Date();                // Get the current Date

const year = date.getFullYear();        // Get the current year
const month = date.getMonth();          // Get the current month (0-11)
const date2 = date.getDate()            // Get the current date
const hour = date.getHours();           // Get the current hour
const minutes = date.getMinutes();      // Get the current
const seconds = date.getSeconds();      // Get the current second
const dayofweek = date.getDay();        // Get the current day

console.log(year);
console.log(month);
console.log(date2);  
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayofweek);

////////////////////////////////////////////////////////////////////////////


// Set date manually

const date3 = new Date();

date3.setFullYear(2029);
date3.setMonth(04);
date3.setDate(2);
date3.setHours(12);
date3.setMinutes(30);
date3.setSeconds(0);

console.log(date3);


////////////////////////////////////////////////////////////////////////////

// Compare two Dates

const Date1 = new Date("2023-06-08");
const Date2 = new Date("2024-06-08");

if(Date2 > Date1){
    console.log("Happy New Year");
}