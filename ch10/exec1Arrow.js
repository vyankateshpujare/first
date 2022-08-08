window.onload = init;
var cookies = {
instructions: "Preheat oven to 350...",
bake: (time)=> {
        console.log("Baking the cookies.");
        setTimeout(()=> {
            alert("Cookies are ready, take them out to cool.");
            console.log("Cooling the cookies.");
            var cool =()=> {
                            alert("Cookies are cool, time to eat!");
                        };
            setTimeout(cool, 1000);
        }, time);
}
};
function init() {
    var button = document.getElementById("bake");
    button.onclick = ()=> {
        console.log("Time to bake the cookies.");
        cookies.bake(2500);
        };
}

