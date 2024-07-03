
// Constructor = special method for defining the properties and methods of objects


// Create constructor
function car(make, model, year, color){

    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    //////////////////////
    this.drive = function(){
        console.log(`You drive ${this.model}`)
    }
}
//////////////////////////////////////////////////////////////////////////////////

// Create object using constructor

const car1 = new car("Ford", "Mustang", 2024, "Red"); // Properties

console.log(car1);                // Print the whole properties of object
console.log(car1.make);           // Print one property
console.log(car1.model);          
console.log(car1.year);
console.log(car1.color);
car1.drive();

//////////////////////////////////////////////////////////////////////////////////

// Create object using constructor

const car2 = new car("Dodge", "Viper", 2026, "green");

console.log(car2);               // Print the whole properties of object
console.log(car2.make);          // Print one property
console.log(car2.model);9
console.log(car2.year);
console.log(car2.color);
car2.drive();


function student(name, age, course){
    this.name = name;
    this.age = age;
    this.course = course;
}

const student1 = new student("Ferdinnad", 24, "BSIT");

    console.log(student1.name);
    console.log(student1.age);
    console.log(student1.course);


