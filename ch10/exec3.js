let pass="vyanki@12"

function makePassword(password) {
    return (passwordGuess)=> {
    return (passwordGuess === password);
    };
    }

let isValid=makePassword(pass);
console.log("is Correct ? : "+isValid("vyanki@12")) ;

function multN(n) {
    return (num)=>{
    return num*n;
    };
    }
let result=multN(12)
console.log("Multiplication is : "+result(2));