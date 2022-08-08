function validateInput()
{
    console.log("something");
}
let someObj={
    validateIn:validateInput,
    schema:schema
}
let {validateIn:validate}=someObj;
validate();