class animals{
    
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log("Animals are eating");
    }
}

class dog extends animals{
    constructor(name){
        super(name);
    }
}

class cat extends animals{
    constructor(name){
        super(name);
    }
}

const dog1 = new dog("Doggie");

console.log(dog1);
dog1.eat();