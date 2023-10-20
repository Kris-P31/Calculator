function handleAddition(){
    // Getting the number from user
    var number1 = parseInt( document.getElementById('num1').value) ;
    var number2 =parseInt( document.getElementById('num2').value);
    // performing operation
    var result = number1 + number2;
    // giving result
    console.log(result)
    document.getElementById('show-data').innerHTML=`Addition of ${number1} and ${number2} is ${result}`
}

function handleSubtract(){
    var number1 = parseInt( document.getElementById('num1').value) ;
    var number2 = parseInt( document.getElementById('num2').value) ;
    var result = number1 - number2
    console.log(result)
    document.getElementById('show-data').innerHTML=`Subtraction of ${number1} and ${number2} is ${result}`
}

function handleDivide(){
    var number1 = parseInt( document.getElementById('num1').value) ;
    var number2 = parseInt( document.getElementById('num2').value) ;
    var result = number1 / number2
    console.log(result)
    document.getElementById('show-data').innerHTML=`Division of ${number1} and ${number2} is ${result}`
}

function handleMultiply(){
    var number1 = parseInt( document.getElementById('num1').value) ;
    var number2 = parseInt( document.getElementById('num2').value) ;
    var result = number1 * number2
    console.log(result)
    document.getElementById('show-data').innerHTML=`Multiplication of ${number1} and ${number2} is ${result}`
}