let mark1= Array(5)
let mark2= new Array(12,15,78,65,43)
let mark3= [58,63,91,50,87]
mark1[0]= 75; mark1[1]= 64; mark1[2]= 19; mark1[3]= 09; mark1[4]= 43

console.log("-------------")
console.log(mark1)
console.log(mark2)
console.log(mark3)
console.log("mark1[2]: " + mark1[2])

console.log("-------------")
mark3[0]= 01
console.log(mark3) //[01,63,91,50,87]

console.log("-------------")
console.log("mark2.length: " + mark2.length)

console.log("-------------")
mark1.push(18) //[75,64,19,09,43,18]
console.log(mark1)

console.log("-------------")
mark1.pop()
console.log(mark1)

console.log("-------------")
mark3.unshift(005)
console.log(mark3) //[005,58,63,91,50,87]

console.log("-------------")
console.log("index of 91 mark2: " + mark3.indexOf(91))

console.log("-------------")
console.log("120 is prsent on mark3?: " + mark3.includes(120))

console.log("-------------")
var sum1=0
for(let i=0; i<mark2.length; i++)
{
    sum1= sum1 + mark3[i]
}
console.log("The sum of all elements in mark2 is (for): " + sum1)

console.log("-------------")
var sum2=0
let total= mark1.reduce((sum2, marktotal) => sum2+marktotal,0)
console.log("The sum of all elements in mark1 is (reduce): " + total)
total= mark1.reduce((sum2, marktotal) => sum2-marktotal,0)
console.log("The subtract of all elements in mark1 is (reduce): " + total)

console.log("-------------")
let scores= [0,1,2,3,4,5,6,7,8,9]
let pair= []
let even= []

for(let i=0; i<scores.length; i++)
{
    if(scores[i]%2 == 0)
    {
        pair.push(scores[i])
    }else
    {
        even.push(scores[i])
    }
}
console.log("Pair numbers (for): " + pair)
console.log("Even number (for): " + even)

console.log("-------------")
let filterPair= scores.filter(scores=> scores%2==0)
let filterEven= scores.filter(scores=> scores%2!==0)
console.log("Pair numbers (filter): " + filterPair)
console.log("Even number (filter): " + filterEven)

//Maps

let mappedArray= mark3.map(mark3=>mark3*3)
console.log(mark3)
console.log(mappedArray)

let totalVal= mappedArray.reduce((sum, val)=>sum+val,0)
console.log(totalVal)


let mark4= [58,63,91,50,87]
let sumVal= mark4.filter(mark4=>mark4%2==0).map(mark4=>mark4*3).reduce((sum,val) => sum+val,0)
console.log(sumVal)
