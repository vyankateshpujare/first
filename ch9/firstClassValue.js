let shapes=[{name:"circle",radius:5},
            {name:"square",side:4},
            {name:"rectangle",length:6,breadth:7}];

function getAreaFunction()
{
    let shapes=[{name:"circle",radius:10},
            {name:"square",side:5},
            {name:"rectangle",length:4,breadth:7}];

    shapes.forEach(shape => {
        const areaFn=createAreaFunction(shape);
        console.log(typeof(areaFn));
        const area=areaFn();
        console.log(area);
        
    });
}

function createAreaFunction(shape)
{
    if(shape.name == "circle")
    {
        return function()
        {
            return "Area of Circle : "+3.14 * shape.radius * shape.radius;
        };
    }
    else if(shape.name == "square")
    {
        return function()
        {
            return "Area of Square : "+shape.side*shape.side;
        };
    }
    else if(shape.name == "rectangle")
    {
        return function()
        {
            return "Area of Rectangle : "+shape.length*shape.breadth;
        };
    }
}
getAreaFunction();