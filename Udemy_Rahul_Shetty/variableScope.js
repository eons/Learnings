// ********************** var - Global | Function ***********************
var greet1= "Morning"  // GLOBAL

function f1()  // FUNCTION
{
    var greet2= "Moooooorning!!"
}

if(1 == 1)  // BLOCK
{
    var greet3= "Afternoon"
}

console.log(greet1 + " - [var | greet1 | Global level]")
//console.log(greet2 + " - [var | greet2 | Function level]") // [var] greet2 wont be displayed as this variable can not be reachable out the function
console.log(greet3 + " - [var | greet3 | Block level]")


// ********************** let - Global | Block ***********************

let greet4= "Morning"  // GLOBAL
greet4= "Super Morning" // let allows to re-initialize the variable

function f2()  // FUNCTION
{
    let greet5= "Moooooorning!!"
}

if(1 == 1)  // BLOCK
{
    let greet6= "Afternoon"
}

console.log(greet4 + " - [let | greet4| Global level]")
//console.log(greet5 + " - [let | greet5 | Function level]") // [let] greet5 wont be displayed as this variable can not be reachable out the function
//console.log(greet6 + " - [let | greet6 | Block level]") // [let] greet5 wont be displayed as this variable can not be reachable out the block



// ********************** const - Global | Block *********************** goog to use with locators values as they shouldn't changed...

const greet7= "Morning"  // GLOBAL
greet7= "Super Morning" // let does not allows to re-initialize the variable

function f3()  // FUNCTION
{
    const greet8= "Moooooorning!!"
}

if(1 == 1)  // BLOCK
{
    const greet9= "Afternoon"
}

console.log(greet7 + " - [const | greet4| Global level]")
//console.log(greet8 + " - [const | greet5 | Function level]") // [let] greet5 wont be displayed as this variable can not be reachable out the function
console.log(greet9 + " - [const | greet6 | Block level]") // [let] greet5 wont be displayed as this variable can not be reachable out the block