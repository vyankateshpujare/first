
window.onload = ()=> {
    let count = 0;
    let button = document.getElementById("clickme");
    button.onclick = () => {
        let message = "You clicked me ";
        let div = document.getElementById("message");
        count++;
        div.innerHTML = message + count + " times!";
        };
};
