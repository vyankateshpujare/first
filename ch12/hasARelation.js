let canEat={
    eat()
    {
        console.log("eating...")
    }
}
let canWalk={
    walk()
    {
        console.log("Walking...");
    }
}
let canSwim={
    swim()
    {
        console.log("swimming...");
    }
}
let fish={...canEat,...canSwim};
console.log(fish);