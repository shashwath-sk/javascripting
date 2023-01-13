
function isPrime(number)
{
    if(number%2==0)
    {
        return false
    }
    let i=3
    for(i;i<=number/2;i++)
    {
       if(number%i==0)
       {
            return false
       }
    }
    return true
}

function isArmstrong(number)
{
    let value = number,result=0
    while(value!=0)
    {
        let digit = value%10
        value=parseInt(value/10)
        result+= digit*digit*digit
    }
    if(result===number)return true
    return false
}

console.log(isPrime(5))
console.log(isArmstrong(153))