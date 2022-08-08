
let button=document.getElementById("btn");
button.onclick=formHandler;
function formHandler()
{
    let inputs=document.getElementsByTagName("input");
    for(let i=0;i<inputs.length-1;i++)
    {
        if(inputs[i].name == "gen")
        {
            if(inputs[i].checked)
            {
                console.log(inputs[i].value);
            }
        }
        else
        {
            console.log(inputs[i].value);
        }
    }
}