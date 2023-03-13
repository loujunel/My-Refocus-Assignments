// class Person {
//     constructor(name, gender) {
//         this.name = name;
//         this.gender = gender;
//     }

//     greet(){
//         console.log("Hello world! " + this.name);
//     }
// }

// const person = new Person('Carl', 'Male');
// person.greet();

class Dog { //class instance
    name; //class property, since this is an object
    #gender = 'Male'; //private property

    constructor(){ //constructor
    }

    bark(){
        console.log('arf! arf!')
    }

    whatAmI(){
        console.log(`I am ${this.#gender}`)
    }

    #myFavoriteFood(){ //private method
        console.log("Adobo");
    }
}

class Pet extends Dog {
    constructor(){
        super();
    }

    setName(name){
        this.name = name;
        console.log(this.name);
    }

    greet() {
        this.bark();
    }
}

const pet = new Pet();
pet.setName("bantay");
pet.greet();
pet.whatAmI();

