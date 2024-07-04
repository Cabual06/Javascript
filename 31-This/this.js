 
// this = reference to the object where "this" is used (the object depends on the immediate context). person.name = this.name

// used .this to use the property of an object/s. consructor and class
// .this cant be use to arrow functions

const person1 = {
    name: "Ferdinand",
    favFood: "Pizza",
    sayHello: function(){
        console.log(`Hello my name is, ${this.name}`)       
    }
}

console.log(person1);
console.log(person1.name);
person1.sayHello();                 // Print the function

/////////////////////////////////////////////////////////////

const person2 = {
    name: "Jayann",
    age: 31,
    favFood: "Ice-cream",
    sayHello: function(){
        console.log(`Hello, my name is ${this.name}`)
    },
    sayHi: () => {
        console.log(`Hi, my name is ${this.name}`)
    },
}

console.log(person2);
person2.sayHello();
person2.sayHi();

////////////////////////////////////////////////////////////////////

// what happens when use this. in object.. It gives undefined 

const student = {
    name: "Ferdinand",

    sayHello: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
}

student.sayHello();


////////////////////////////////////////////////////////////////////


// what happens when use this. in constructor.. Its okay

function person(name){
    this.name = name;

    this.sayHello = () =>{
        console.log(`Hello ${this.name}`);
    }
}

const person1 = new person("Ferdinand");

person1.sayHello();



////////////////////////////////////////////////////////////////////


// what happens when use this. in class.. Its okay

class person{
    constructor(name){
        this.name = name;
    }

    sayHello = () => {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person1 = new person("Ferdinand");

person1.sayHello();