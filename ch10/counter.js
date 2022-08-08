
function getCounter()
{
    let count=0;
    function inner()
    {
        count=count+1;
        return count;
    }
    return inner;
}
let count=getCounter();
console.log(count());
console.log(count());
console.log(count());