class Shape
{
    draw()
    {
        console.log("Draw Shape");
    }
}
class Square extends Shape
{
    draw()
    {
        console.log("Draw Square");
    } 
}
class Rectangle extends Shape
{
    draw()
    {
        console.log("Draw Rectangle");
    }
}
class Circle extends Shape
{
    draw()
    {
        console.log("Draw Circle");
    }
}

let poly=new Shape()
poly.draw();
poly=new Square();
poly.draw();
poly=new Rectangle();
poly.draw();
poly=new Circle();
poly.draw();