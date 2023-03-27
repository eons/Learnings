// https://www.youtube.com/watch?v=baDdsQ4aw4o&list=WL&index=10&ab_channel=midulive

//// ********** Primitivos **********

typeof undefined // undefined
typeof true // boolean
typeof 1 // number
typeof "String" // String
typeof 2n // bigInt
typeof Symbol // Symbol
typeof null // null -- por un error que no se a corregido dice que es un Object pero en realidad deberia ser null

// los tipo de datos primitivos se comparan por su valor y su valor no pouede ser mutado
// 1 === 1
// true ... su valoor no puede ser mutado/cambiado


//// ********** Objects **********

typeof {} // Object
typeof [] // Object
const set = new Map() // Object
typeof set // Object

// los objetos se comparan por referencia... imagina dos cajas diferentes.. son cajas diferentes pero pueden conteenr lo mismo
// en si son objetos que estan apuntando a diferentes direcciones de memoria, que pueden tener lo mismo pero no son lo mismo

// {a : 1} === [a : 1]  (esto es falso)


//// ********** Function **********

typeof function () {} // Function