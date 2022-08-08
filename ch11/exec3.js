function Car(model,color,mileage)
{
    this.model=model;
    this.color=color;
    this.mileage=mileage;

    this.start=()=>
    {
        console.log("starting ....");
    }
    this.drive=()=>
    {
        console.log("Running ....");
    }
    this.stop=()=>
    {
        console.log("Stop .");
    }
}