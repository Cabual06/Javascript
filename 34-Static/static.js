// Static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static , not the objects).

// Dont need to create object to use the properties of class MathUtil.

// Static method

class mathUtil{

    static PI  = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
}

console.log(mathUtil.PI);
console.log(mathUtil.getDiameter(10));

/////////////////////////////////////////////////////////////////


class user{

    static userCount = 0;           // Create static usercount to count the users

    constructor(userName){          // Create constructor, need userName
        this.userName = userName;
        user.userCount++;           // Increment userCount
    }

    // Create function 

    sayHello(){
        console.log(`Hello ${this.userName}`);
    }
}

const user1 = new user("Cab");      // Create user1 object

console.log(user1.userName);        // Print the user, userName
console.log(user.userCount);        // Print the user count

user1.sayHello();

