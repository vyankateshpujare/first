
String.prototype.isPalindrome=function()
{
    let string=this.valueOf();
    for(let i=0;i<=string.length/2;i++)
    {
        if(string.charAt(i)!=string.charAt(string.length-1-i))
        {
            return false;
            break;
        }
    }
    return true;
}

function checkPalindrome()
{
    let input=document.getElementById("str").value;
    let string=new String(input);
    if(string.isPalindrome())
    {
        document.getElementById("display").innerHTML="Palindome";
    }
    else
    {
        document.getElementById("display").innerHTML="Not a Palindome";
    }
}
let click=document.getElementById("btn");
click.onclick=checkPalindrome;

