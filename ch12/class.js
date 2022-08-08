class Dog
{
    constructor(name,breed,weight)
    {
        this.name=name;
        this.breed=breed;
        this.weight=weight;
    }
    bark()
    {
        if(this.weight < 20)
        {
            console.log("woof woof");
        }
        else{
            console.log("bhow bhow");
        }
    }
}
let fido=new Dog("fido","mixed",10);
fido.bark();
class ShowDog extends Dog
{
    constructor(name,breed,weight,trainer)
    {
        super(name,breed,weight);
        this.trainer=trainer;
    }
    bait()
    {
        console.log("Bait");
    }
    groom()
    {
        console.log("groom");
    }
}
let juno=new ShowDog("juno","mixed",26,"vsp")
juno.bait();
juno.groom();
juno.bark();
