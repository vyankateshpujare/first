//Excersize 1

// var joke="JavaScript walk into a bar...";
// var toldJock=true;
// var $punchline="Better watch out for those semi-colons.";
// var percentage=20;

// if(toldJock==false)
// {
//     alert($punchline);
// }
// else{
//     alert(joke);
// }

//excersize 2

// var zip_code=416805;
// var joesFavouriteMovie="Forbidden Plannet";
// var movieTicket$=50;
// if (movieTicket$ >= 9)
//    {
//     alert("Too much!");
//     } else {
//     alert("We're going to see " + joesFavoriteMovie);
//     }

// excersize 3

// var j=0;
// var names=["a","b","c","d","e","f","g","h","i","j","k","l","m"];
// for(name:names)
// {
//     document.write("Happy Birthday To You<br>");
//     document.write("Happy Birthday To You<br>");
//     document.write("Happy Birthday dear "+ name+"<br>");
//     document.write("Happy Birthday To You <br><br>");
// }

//using function

function hbd(name)
{
    document.write("Happy Birthday To You<br>");
    document.write("Happy Birthday To You<br>");
    document.write("Happy Birthday dear "+ name+"<br>");
    document.write("Happy Birthday To You <br><br>");
}
var j=0;
var name=["a","b","c","d","e","f","g","h","i","j","k","l","m"];
while(j<13)
{
    hbd(name[j]);
    j++;
}