const flag= true

if(!flag)
{
    console.log("Condition satisfied")
}
else 
{
    console.log(flag)
    console.log("Conditions was not satisfied")
}

let i= 0
while(i<10)
{
    console.log(i)
    i++
}
console.log("---------------")

let x= 0
while(x<10)
{
    x++
    console.log(x)
}

do
{
    i++
}
while(i<10);
console.log(i)

console.log("---------------")

for(let k=0;k<=10;k++)
{
    if(k%2 == 0)
    {
        console.log(k)
    }  
}

console.log("---------------")

for(let k=1;k<=10;k++)
{
    if(k%2 == 0 && k%5 == 0)
    {
        console.log(k)
    }  
}

console.log("---------------")

for(let k=1;k<=10;k++)
{
    if(k%2 == 0 || k%5 == 0)
    {
        console.log(k)
    }  
}

console.log("---------------")

let n= 0
for(let k=1;k<=10;k++)
{
    if(k%2 == 0 || k%5 == 0)
    {
        n++
        console.log(k)
        if(n == 3)
        {
            break
        }
    }  
}