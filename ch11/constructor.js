function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark =()=>
    {
        if(this.weight<20)
        {
            console.log("woof woof");
        }
        else{
            console.log("bhow bhow");
        }
    }
}
let fido=new Dog("fido","mixed",23);
//fido.getName();

function Album(title,artist,year)
{
    this.title=title;
    this.artist=artist;
    this.year=year;
    this.play=()=>
    {
        console.log("Title  : "+this.title);
        console.log("Artist : "+this.artist)
        console.log("Year   : "+this.year)
    }
}
let darkside=new Album("Dark side of the Cheese","Pink Mouse",1971);
darkside.play();
