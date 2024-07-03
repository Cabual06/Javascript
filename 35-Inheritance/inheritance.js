
// Inheritance = allows a new class to inherit properties and methods from an existing class (parent => child) helps with code reusability.


/////////////////////////////////////////////////////////////


 // Animal class will be the parent class
class Animal{        

     alive = true;

     eat(){
        console.log(`This ${this.name} is eating`);
     }

     sleep(){
        console.log(`This ${this.name} is sleeping`);
     }
}

/////////////////////////////////////////////////////////////

// Create child class 
class rabbit extends Animal{    

    name = "Rabbit";            // Properties

    run(){                      // Create own method inside child class
        console.log(`This ${this.name} is running`);
    }
}


// Create child class 
class fish extends Animal{    

    name = "Fish";
}


// Create child class 
class hawk extends Animal{    

    name = "Hawk"; 
}

/////////////////////////////////////////////////////////////

const Rabbit = new rabbit();
const Fish = new fish();
const Hawk = new hawk();

console.log(Rabbit.alive);
Rabbit.eat();
Rabbit.run();

console.log(Fish.alive);
Fish.eat();

console.log(Hawk.alive);
Hawk.eat();