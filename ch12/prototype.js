function Dog(name,breed,weight)
{
    this.name=name;
    this.breed=breed;
    this.weight=weight;
}

Dog.prototype.bark=function()
{
    if(this.weight<20)
    {
        console.log("woof woof");
    }
    else{
        console.log("bhow bhow");
    }
}

let tommy=new Dog("Tommy","mixed",15);
tommy.bark();

function ShowDog(name,breed,weight,trainer)
{
    Dog.call(this,name,breed,weight);
    this.trainer=trainer;
}

ShowDog.prototype=new Dog();
ShowDog.prototype.constructor=ShowDog;
ShowDog.prototype.bait=function()
{
    console.log("bait");
}
let pintya=new ShowDog("pintya","mixed",28,"vsp");
pintya.bait();
//pintya.bark();
console.log(pintya.constructor);

