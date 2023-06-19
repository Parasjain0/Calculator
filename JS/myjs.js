// Variable for accessing fields
let num1=document.getElementById("inputNumber1");
let num2=document.getElementById("inputNumber2");
let op=document.getElementById("op-select");
let ans=document.getElementById("answer");
let button=document.getElementById("submitbutton");
let result = null
// Function for calculation 
function calculate(){
    switch(op.value){
        case '1':
           result= Number(num1.value)+Number(num2.value);
           break;
        case '2':
            result= Number(num1.value)-Number(num2.value);
            break;
        case '3':
            result= Number(num1.value)*Number(num2.value);
            break;
        case '4':
            if(num2.value==0){
                result="Number can not be divided by Zero"
            }
            else{
                result= Number(num1.value)/Number(num2.value);
            }
            break;
    }
    ans.setAttribute("value", result);   
}
// function to show impty answer filed as we click inputs
function resetAnswer(){
   ans.setAttribute("value","")
}
// Function to change status of button as input
function buttonStatus(){
    if(!num1.value || !num2.value){
        button.setAttribute("disabled","")
    }
    else{
        button.removeAttribute("disabled","")
    } 
}