let car={
    year:1955,
    make:"GM",
    model:"Cadillac",
    color:"white",
    convertible:true,
    started:false,
    start:function()
    {
        this.started=true;
    },
    run:function()
    {
        if(this.started)
        {
            console.log("Running ...");
        }
        else{
            console.log("Not Running");
        }
    },
    stop:function()
    {
        this.started=false;
    },
    passenger:10,
    mileage:12892,
    address:{
        city:"Devgad",
        Dist:"Sindhudurg"
    }
};

car.run();
car.start();
car.run();
car.stop();
car.run();