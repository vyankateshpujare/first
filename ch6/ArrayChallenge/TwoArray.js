
let firstArray=[22,5,6,2,10,3];
let secondArray=[77,2,3,8,7,22];

console.log("Array Elements of First Array : "+firstArray);
console.log("Array Elements of Second Array : "+secondArray);

function arrayCommonElements()
{
    let commonElementsArray=new Array();

    firstArray.forEach(element => {
        if(secondArray.includes(element) )
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
    let diffElementsArray=new Array();
    let diffElementsFromFirstArray=new Array();
    let diffElementsFromSecondArray=new Array();

    firstArray.forEach(element => {
        if(!(secondArray.includes(element)) )
        {
            diffElementsFromFirstArray.push(element);
        }
    });
    secondArray.forEach(element => {
        if(!(firstArray.includes(element)))
        {
            diffElementsFromSecondArray.push(element);
        }
    });

    diffElementsArray=[...diffElementsFromFirstArray,...diffElementsFromSecondArray];

    // diffElementsArray=[...firstArray.filter(value =>!( secondArray.includes(value))),secondArray.filter(value =>!( firstArray.includes(value)))];

    console.log("Different Elements from First Array : "+diffElementsFromFirstArray);
    console.log("Different Elements from Second Array : "+diffElementsFromSecondArray);
    console.log("Different Elements from two Array : "+diffElementsArray);

}
arrayDiffElements()