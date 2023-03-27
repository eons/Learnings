// https://www.youtube.com/watch?v=LnqjvuwA83s&ab_channel=midulive

const groupBy = require('array.prototype.groupby');

groupBy.shim(); // mutar el array.prototype.groupBy

const group1= [1,2,3,4,5,6,7,8,9].groupBy(num =>{

    return num % 2 === 0 ? 'par' : 'inpar'
});


console.log(group1);

const group2= [{name: 'Adal'}, {name: 'Jose'}, {name: 'Martha'}, {name: 'Nataly'}].groupBy(user =>{

    return user.name.includes('t') ? 'con-t' : 'sin-t'
});

console.log(group2);


const group3= [{name: 'Adal'}, {name: 'Jose'}, {name: 'Martha'}, {name: 'Nataly'}].groupBy(user =>{

    if(user.name.includes('t')) return 't'
    if(user.name.includes('a')) return 'a'
    if(user.name.includes('y')) return 'y'
    return 'rest'
});

console.log(group3);