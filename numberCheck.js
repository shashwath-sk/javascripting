
const isPrime = (number)=>
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

const isArmstrong=number=>
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

const arr = [5,152,153,783,45,293]
for(let it = 0 ;it<arr.length;it++)
{
    console.log(isPrime(arr[it]))
    console.log(isArmstrong(arr[it]))
}
