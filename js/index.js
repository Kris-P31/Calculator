function handleAddition(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    if (num1=="" || num2=="") {
        document.getElementById('errorMsg').innerHTML=`please input a number in both, shouldn't be empty`
        setTimeout(()=>{
            document.getElementById('errorMsg').innerHTML=''
 
        },2000)
    } else {
        // Getting the number from user
    var number1 = parseFloat( document.getElementById('num1').value) ;
    var number2 =parseFloat( document.getElementById('num2').value);
    // performing operation
    var result = number1 + number2;
    // giving result
    console.log(result)
    document.getElementById('show-data').innerHTML=`Addition of ${number1} and ${number2} is ${result}`
    }
    
}

function handleSubtract(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    if (num1=="" || num2 =="") {
        document.getElementById('errorMsg').innerHTML=`please input a number in both, shouldn't be empty`
        setTimeout(()=>{
            document.getElementById('errorMsg').innerHTML=''
 
        },2000)
    } else {
    var number1 = parseFloat( document.getElementById('num1').value) ;
    var number2 = parseFloat( document.getElementById('num2').value) ;
    var result = number1 - number2
    console.log(result)
    document.getElementById('show-data').innerHTML=`Subtraction of ${number1} and ${number2} is ${result}`     
    }
    
}

function handleDivide(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    if (num1=='' || num2=='') {
        document.getElementById('errorMsg').innerHTML=`please input a number in both, shouldn't be empty`
        setTimeout(()=>{
            document.getElementById('errorMsg').innerHTML=''
 
        },2000)
    } else {
        var number1 = parseFloat( document.getElementById('num1').value) ;
        var number2 = parseFloat( document.getElementById('num2').value) ;
        var result = number1 / number2
        if (number1==0 && number2==0) {

            document.getElementById('errorMsg').innerHTML=`Error! You can't use zero as numerator and denominator, at the same time`
            setTimeout(()=>{
                document.getElementById('errorMsg').innerHTML=''
     
            },2000)
        } else {
            document.getElementById('show-data').innerHTML=`Division of ${number1} and ${number2} is ${result}`
        }
    }
   
    
    // number 2-> 0
    // result -> NaN
    // if (number1==0 && (number2==0 || result == 0 )) {
        
    // } else {
        
    // }
   
}
function handleMultiply(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    if (num1=='' || num2=='') {
        document.getElementById('errorMsg').innerHTML=`please input a number in both, shouldn't be empty`
        setTimeout(()=>{
            document.getElementById('errorMsg').innerHTML=''
 
        },2000)
    } else {
    var number1 = parseFloat( document.getElementById('num1').value) ;
    var number2 = parseFloat( document.getElementById('num2').value) ;
    var result = number1 * number2
    console.log(result)
    document.getElementById('show-data').innerHTML=`Multiplication of ${number1} and ${number2} is ${result}`
    }
    
}