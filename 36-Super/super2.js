
// Super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this = this object
// super = the parent

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){

        super(name, age);                // Call the super constructor of Parent class to use this. keyword
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){

        super();

        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){

        super();

        this.flySpeed = flySpeed;
    }
} 

const rabbit = new Rabbit("BugsBunny", 20, 60);
const fish = new Rabbit("BugsFishy", 10, 40);
const hawk = new Rabbit("BugsHawky", 30, 30);

console.log(rabbit);
console.log(fish);
console.log(hawk);