// CALCULATOR FUNCTIONALITY

// let currentNumber = '';
// let previousNumber = '';
// let currentOperator = null;
// let shouldResetDisplay = false;

// const display = document.getElementById("display");

function appendToDisplay(input){

    display.value += input;
}


// function appendToDisplay(number) {
//     if (shouldResetDisplay) {
//         display.textContent = ''; 
//         shouldResetDisplay = false;
//     }

//     currentNumber += number;
//     display.textContent += number; 
// }


// function setOperator(operator) {
//     if (currentNumber === '') return; 
//     if (previousNumber !== '') {
//         calculateResult(); 

//     } else {
//         previousNumber = currentNumber; 
//     }

//     currentOperator = operator;
//     shouldResetDisplay = true; 
//     currentNumber = ''; 
// }

// function calculate() {
//     if (currentOperator === null || currentNumber === '') return;

//     let result;
//     const num1 = parseFloat(previousNumber);
//     const num2 = parseFloat(currentNumber);

//     switch (currentOperator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//         case '/':
//             result = num1 / num2;
//     }
//     display.textContent = result;
//     previousNumber = result.toString(); // Store the result for further calculations
//     currentOperator = null; // Reset the operator
//     currentNumber = ''; // Reset the current number
//     shouldResetDisplay = true; 
// }



function clearDisplay(){
    display.value = "";

}

function calculate(){
    try{
        display.value = eval(display.value); 
    }
    
    catch(error){
        display.value="Error";
    }
}