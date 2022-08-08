function welcome(name="vyanki",message="Hello")
{
    return `${message} ${name}`;
}
console.log(welcome("vsp"));

function Dog(messg,name="vsp")
{
    console.log(name+" "+messg);
}
let a=new Dog("good morning");