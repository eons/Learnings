module.exports= class Person  // moduel.export helps us to export the class to be use it in another one
{

    age= 25

    // location= "canada"

    get location() // get keyword means that what we are declaring it's a property NOT a method
    {
        return "canada"
    }

    
    // constructor it's a method which executes by default when you create object of the class
    constructor(firstName, lastName)
    {
        this.firstName = firstName
        this.lastName = lastName

    }

    //Methods
    fullName()
    {
        console.log(this.firstName + " " + this.lastName)
    }

}


//let person1= new Person("tim", "tin")
//let person2= new Person("chris", "bon")
//console.log(person1.age)
//console.log(person1.location)
//person1.fullName()
//console.log(person2.fullName())

// ***** I commented lines from 31 to 36 to avoid conflcts in export_import_classes.js once I call this class *****