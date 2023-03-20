// Inheritance is the Main pillar in Object oriented Programming
// one class can inherit/acquire the properties, methods of another class
// the class which inherits the properties of other is known as subclass (ferived class, child class)
// the class whose properties are inherited is known as superclass (parent class)

const Person = require("./classes");

// ***** if the superclass has a constructorm then the child class must has same constructor implemented 
// and call the parent class constructor *****

class Woman extends Person
{

    get location()
    {
        return "toronto"
    }

    constructor(firstName_, lastName_)
    {
        super(firstName_, lastName_)
    }

}

let woman= new Woman("Ana", "Polite")
woman.fullName()
console.log(woman.location)

