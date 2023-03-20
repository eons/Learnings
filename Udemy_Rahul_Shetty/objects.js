let persona=
{
    firstName: 'Tim',
    lastName: 'burton',
    age: 25,

    fullName: function()
    {

        console.log(this.firstName + " " + this.lastName)
        //this.firstName + " " + this.lastName
    } 
}

console.log(persona.firstName)
console.log(persona['firstName'])

persona.firstName= 'Jhon week'  // changing firstName value here
console.log(persona.firstName)

persona.gender= 'male'
console.log(persona)

delete persona.gender
console.log(persona)

// how to validate if a property it's present or not

console.log('gender' in persona)

// how to print properties and values
console.log("--------------")
for(let data in persona)
{
    console.log(data)
}
console.log("--------------")
for(let data in persona)
{
    console.log(persona[data]) // no print fullName beacuase it's a function value and it should be call as below...
}

console.log(persona.fullName())
