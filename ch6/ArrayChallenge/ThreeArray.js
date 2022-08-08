
let firstArray=[22,5,6,2,10,3,56];
let secondArray=[77,2,3,8,7,22];
let thirdArray=[45,23,22,10];

let commonElementsArray=new Array();
let diffElementsArray=new Array();

console.log("Array Elements of First Array : "+firstArray);
console.log("Array Elements of Second Array : "+secondArray);
console.log("Array Elements of Third Array : "+thirdArray);

function arrayCommonElements()
{
    firstArray.forEach(element => {
        if(secondArray.includes(element) && thirdArray.includes(element) )
        {
            commonElementsArray.push(element);
        }
    });
    
    // commonElementsArray=firstArray.filter(value =>( secondArray.includes(value)));
    
    console.log("Common Elements from two Array :  "+commonElementsArray);
}
arrayCommonElements();

function arrayDiffElements()
{
    let diffElementsFromFirstArray=new Array();
    let diffElementsFromSecondArray=new Array();
    let diffElementsFromThirdArray=new Array();

    firstArray.forEach(element => {
        if(!(commonElementsArray.includes(element)) )
        {
            diffElementsFromFirstArray.push(element);
        }
    });
    secondArray.forEach(element => {
        if(!(commonElementsArray.includes(element)) )
        {
            diffElementsFromSecondArray.push(element);
        }
    });
    thirdArray.forEach(element => {
        if(!(commonElementsArray.includes(element)))
        {
            diffElementsFromThirdArray.push(element);
        }
    });

    diffElementsArray=[...diffElementsFromFirstArray,...diffElementsFromSecondArray,...diffElementsFromThirdArray];

    // diffElementsArray=[...firstArray.filter(value =>!( secondArray.includes(value))),secondArray.filter(value =>!( firstArray.includes(value)))];

    console.log("Different Elements from First Array : "+diffElementsFromFirstArray);
    console.log("Different Elements from Second Array : "+diffElementsFromSecondArray);
    console.log("Different Elements from Third Array : "+diffElementsFromThirdArray);
    console.log("Different Elements from two Array : "+diffElementsArray);

}
arrayDiffElements()