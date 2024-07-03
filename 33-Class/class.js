

// Class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor function. ex. static keyword, encapsulation, and inheritance.


// Create class

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    //Create function inside the class. Don't need to use function keyword

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Product("Shirt", 199);        // Create object

    product1.displayProduct();

    const total = product1.calculateTotal(0.5);
    console.log(`Total is: ${total}`);                 


/////////////////////////////////////////////////////


const product2 = new Product("Short", 159);

product2.displayProduct();                         // Print the product with the function


/////////////////////////////////////////////////////


class product{
    constructor(name, price){
        this.name = name;
        this.price = price; 
    }

    display(){
        console.log(`Item: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    withTax(tax){
        return this.price + tax;
    }
}

const productOne = new product("Realme", 15000);

productOne.display();

const overall = productOne.withTax(5);
console.log(overall);

// console.log(productOne.withTax(5));              //Shorthand



////////////////////////////////////////////////////////////

class student{
    constructor(name, age, course){
        this.name = name;
        this.age = age;
        this.course = course;
    }

    displayStudent(){
        console.log(`Student: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Course: ${this.course}`);
    }

    subject(subject1){
        return `${this.course}: ${subject1}`; // use ${this.} and ${subject} if need to concatenate
    }
}

const studentOne = new student("Ferdinand", 24, "BSIT");
studentOne.displayStudent();


const subjects = studentOne.subject("Math");
console.log(subjects);


///////////////////////////////////////////////////////////////////////////

class product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    returnplay(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    taX(taXprice){
        return this.price + taXprice;  
    }
}

const item1 = new product("Realme", 15000);

console.log(item1);


item1.display();

const total = item1.taX(10);
console.log(total);



