let date=new Date();

console.log("Loacal Time Format : "+date.toString());  //Indian /local time.

console.log("Universal Time Format : "+date.toUTCString());   //Universal time.

console.log("Date Only : "+ date.toDateString());   //return only date.

console.log("ISO Time Format : "+date.toISOString());    //convert to ISO format

function getMethods(d)
{
    console.log("Year : "+d.getFullYear());

    console.log("Month : "+d.getMonth());

    console.log("Date : "+d.getDate());

    console.log("Hours : "+d.getHours());

    console.log("Minutes : "+d.getMinutes());

    console.log("Seconds : "+d.getSeconds());

    console.log("MilliSeconds : "+d.getMilliseconds());

    console.log("getTime : "+d.getTime());   //return milliseconds from 1970

    console.log("Day of week : "+d.getDay());

    console.log("Date.now() Method : "+Date.now());

}
getMethods(date);