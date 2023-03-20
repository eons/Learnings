let day= "wednesday     "
console.log(day.length)

let subDay= day.slice(0,4) // wedn
console.log(subDay)

console.log(day[7]) // a

let splitDay= day.split("s")
console.log(splitDay)

console.log(splitDay[1])

console.log(splitDay[1].length) // 8
console.log(splitDay[1].trim().length) // 3

let date= '28'
let nextDay= '23'
let diff= parseInt(date) - parseInt(nextDay)  // this is the way to conver string to integers for operations

console.log(diff)
diff.toString() // this how to conver from integer to string

// how to concatenate two string
let word1= "water"
let finalWord= word1 + "melon" + " it's my favotire fruit" + "however all fruits are delicious"
console.log(finalWord)
console.log(finalWord.indexOf("e")) // it returns the position of the first letter "e" starting from position 0
console.log(finalWord.indexOf("e", 4)) // it returns the position of the first letter "e" starting from position 4

let repeatLetters= finalWord.indexOf("e")
let count= 0;
while(repeatLetters !== -1) // if does not found letter "e" it returns -1 there fore I'm using this statement, 
{                           // so, while it's differemt than -1 still looking for more letters "e"... alsoe we can use it for looking for words
    count ++
    repeatLetters= finalWord.indexOf("e", repeatLetters+1) // +1 it's because we need it looks from the next position of last letter "e"
} 
console.log(count)
