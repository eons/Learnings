const Person= require("./classes") // this is how you can import another class to be use here but the another class needs
                                      // to be export so it's reachable here, please check how to do it in classes.js

let person= new Person("Albert", "Smith")
person.fullName()
