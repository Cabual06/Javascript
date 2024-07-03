
class Animals{

    constructor(name){
        this.name = name;
    }
}

class dog extends Animals{
    constructor(name){
        super(name);
    }
}

class cat extends Animals{
    constructor(name){
        super(name);
    }
}

const dog1 = new dog("Doggie");

console.log(dog1.name);


