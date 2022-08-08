        let finalResult="";
        let count=0;

        function KaprekarCalculation(num)
        {

            if(String(num).length == 3)
            {
               num="0"+num;
            }   

            let digitArray = Array.from(String(num),Number);
            
            let smallNumber=Number(digitArray.sort().join(""));

            let largeNumber=Number(digitArray.sort().reverse().join(""));

            let numDiff=Math.abs(largeNumber-smallNumber);

            finalResult=` ${finalResult} <br> ${++count} ) ${largeNumber} - ${smallNumber} = ${numDiff}`;
           
            if(numDiff != 6174)
                {
                    KaprekarCalculation(numDiff); 
                }
                      
            document.getElementById("info").innerHTML=finalResult;

        }
        
        function isNumValid(str)
        {
            let message=document.getElementById("msg");
            message.style.color="yellow";

            if(str.length < 4)
            {
                message.innerHTML=" Number Should Be A Four Digit ... ";
            }
            else if(str[0]==str[1]&&str[1]==str[2]&&str[2]==str[3]){
                
                message.innerHTML=" All Digit Should Not Be Same... ";
            }
            else if((str[0]>="a" && str[0]<="z")||(str[1]>="a" && str[1]<="z")||(str[2]>="a" && str[2]<="z")||(str[3]>="a" && str[3]<="z"))
            {
                message.innerHTML=" Please Enter Only Numeric value... "; 
            }
            else{
                return true;
            }
        }

        function KaprekarConstant()
        {
            finalResult="";
            count=0;
            
            let num=document.getElementById("num").value;
            
            if(isNumValid(num.split("")))
            {
                document.getElementById("msg").innerHTML="";
                KaprekarCalculation(num);
            }
        }

        function refresh()
        {
            document.getElementById("msg").innerHTML="";
            document.getElementById("num").value="";
            document.getElementById("info").innerHTML="";
        }