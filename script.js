
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";
let his = [];
let stringHistory = '';

//screen 
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

// history 
const historyClass = document.querySelector(".history");


const history = (history) => {
    if (stringHistory === '' ){
        stringHistory ='' ;
        historyClass.innerHTML = '';
    } stringHistory = history;
    historyClass.innerHTML = stringHistory;
    
};



//button on click

const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
        history(currentNumber);
    });
});

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    };
};
// operaton on click
const inputOperator =(operator)=>{
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator;
    currentNumber = '0';
}

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) =>{
    operator.addEventListener('click',(event) =>{
        inputOperator(event.target.value);
        history(calculationOperator);
    })
})

// calculate 


const calculate=()=>{
let result = '';
switch(calculationOperator){
    case '+':
        result = parseFloat(prevNumber) + parseFloat(currentNumber) ;
        break
    case '-':
        result = parseFloat(prevNumber) - parseFloat(currentNumber) ;
        break
    case 'x':
        result = parseFloat(prevNumber) * parseFloat(currentNumber) ;
        break
    case '/':
        result = parseFloat(prevNumber) / parseFloat(currentNumber) ;
        break
    case '%':
        result = parseFloat(prevNumber) /100 ;
        break
    default:
        return;
    }
currentNumber = result ;
calculationOperator ="";
};

const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
    history(` = ${currentNumber}`);
})


const clearAll = () => {
    currentNumber = "0";
    calculationOperator ='';
    prevNumber = '';
    stringHistory= '';

}
const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
    history(currentNumber);
});
const inputDecimal = (dot)=>{
    currentNumber += dot; 
}
const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
}); 

// delete 
const deleteBtn = document.querySelector('.delete');
const del = () => {
    if (currentNumber.length <= 1) {
        currentNumber = "0";
        stringHistory = "";
    } else {
        currentNumber = currentNumber.slice(0, currentNumber.length - 1);
    };
    
} 


deleteBtn.addEventListener('click', ()=>{
    console.log(stringHistory);
    del();
    history(currentNumber);
    updateScreen(currentNumber);
});

