// ******** With if ********
let adversario1= "Hulk";
let loki1= '';

if(adversario1 === "Hulk")
{
    loki1= "Thanos";
    console.log(loki1);
}else if(adversario1 === "Iron-man")
{
    loki1= "Magneto";
    console.log(loki1);
}else if(adversario1 === "Thor")
{
    loki1= "Odin";
    console.log(loki1);
} else
{
    loki1= "Loki";
    console.log(loki1);
}

console.log("-------------- End with if --------------")

// ******** With switch ********
let adversario2= "Iron-man";
let loki2= '';

switch(adversario2)
{
    case 'Hulk': 
            loki2= "Thanos";
            console.log(loki2);
            break;
    case 'Iron-man':
            loki2= "Magneto";
            console.log(loki2);
            break;
    case 'Thor':
            loki2= "Odin";
            console.log(loki2);
            break;
    default:
            loki2= "Loki";
            console.log(loki2);
}

console.log("-------------- End with switch --------------")

// ******** With has map or has table ********
const adversario3= "Spiderman";

const LOKI_DISFRACES= {
    Hulk: 'Thanos',
    'Iron-man': 'Magneto', // herewe need the quots because the slash can broke the execution other no requiere like Hulk etc...
    Thor: 'Odin'
}
const LOKIO_DEFAULT_DISFRAZ= "Loki";

const loki3= LOKI_DISFRACES[adversario3] || LOKIO_DEFAULT_DISFRAZ;
console.log(loki3);

console.log("-------------- End with has map or has table --------------")

// this optino it's better because just imagine to add new disfraces how many lines of code are require by using If or
// by using Switch... at least 3 but hat happen with has map you require only one more line of code... got it?...
// has map also allows to play with functions thats a plus...


// ******** Bonus has map with functions ********
// const adversario4= "Thor";

// const LOKI_DISFRACES1= {
//     Hulk: () => 'Thanos',
//     'Iron-man': () => 'Magneto',
//     Thor: () => 'Odin'
// }
// const LOKIO_DEFAULT_DISFRAZ1= "Loki";

// const loki4= LOKI_DISFRACES[adversario4]
// ? LOKI_DISFRACES[adversario4]() 
// : LOKIO_DEFAULT_DISFRAZ;
// console.log(loki4);

// console.log("-------------- End bonus with has map and functions --------------")