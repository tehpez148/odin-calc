let display = '';
let firstNo = '';
let secondNo = '';
let operator = '';
let i = 0;

// basic calculate function, take two numbers and an operator as a parameter. 

function calculate (firstNo, secondNo, operator){
    let ans = 0;
    switch (operator){
        case '+':
           ans = parseInt(firstNo) + parseInt(secondNo);
           return ans;
        case '-':
            ans = parseInt(firstNo) - parseInt(secondNo);
            return ans;
        case '/':
            ans = parseInt(firstNo) / parseInt(secondNo);
            return ans;
        case 'x':
            ans = parseInt(firstNo) * parseInt(secondNo);
            return ans;

    };};

// reset function if clear button is pressed
const reset = document.getElementById('clear');
reset.addEventListener('click',() => {
    location.reload();
});


// adds an event listener all buttons with digits, allocated button to either firstNo or secondNo based on an i value.
const buttons = document.getElementById('bottoms').querySelectorAll('.digits');
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        if (i === 0){
                firstNo += (button.id);

                showResults.textContent = firstNo;}
        else if (i === 1){
                secondNo += (button.id);
                showResults.textContent = secondNo;
        };
        
    });
});

//Adds an event listener to all buttons with operators. Changes i value to allow the next digit button pressed
// to be allocated to secondNo. If secondNo has been pressed already, calculate the two values so far and allocate 
// the result to the firstNo, and then allows for a new secondNo to be allocated by clearing the old secondNo value.
const opers = document.getElementById('bottoms').querySelectorAll('.oper');
opers.forEach((oper) =>{
    oper.addEventListener('click', () => {
        if ( i === 0){
            i++;
            operator = (oper.id);
            showResults.textContent = operator;
            console.log(`first number is${firstNo}`);
            console.log(`second number is ${secondNo}`);
            console.log(`i is${i}`);}
        else if (i === 1){
            firstNo = calculate(firstNo,secondNo,operator);
            secondNo = '';
            operator = (oper.id);
            showResults.textContent = operator;
            console.log(`first number is${firstNo}`);
            console.log(`second number is ${secondNo}`);
            console.log(`i is ${i}`);
        
        }
    });
});




const goButton = document.getElementById('equals');
goButton.addEventListener('click', () =>{
    console.log(firstNo);
    console.log(secondNo);
    console.log(calculate(firstNo, secondNo, operator));
    showResults.textContent = calculate(firstNo,secondNo,operator);
});





const container = document.getElementById('screen');

const showResults = document.createElement('p');


container.appendChild(showResults);




console.log(firstNo);
console.log(secondNo);

