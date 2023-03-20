let fruits= ["banana", "grapes", "watermelon", "orange", "apples"]
console.log(fruits.sort()) //so simple sort works for Strings not numbers
console.log(fruits.reverse())

let numbers1= [12,18,13,16,15]
console.log(numbers1.sort() + " -- it looks to be working beacuse all numbers has 2 digits see following") //it looks to be working beacuse all numbers has 2 digits see following

let numbers2= [12,18,3,16,15]
console.log(numbers2.sort() + " -- 3 is the less one but sorting it's failing") //3 is the less one but sorting it's failing

//numbers1.sort(function(a,b){
  // return a-b
//}) // this also can be writne as below

console.log(numbers2.sort((a,b)=>a-b)) // now 3 it's recognaize as the less one and correctly sorted out
console.log(numbers2.sort((a,b)=>b-a)) //reversing numbers

