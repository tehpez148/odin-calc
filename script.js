let display = '';
let firstNo = '';
let secondNo = '';
let operator = '';
let i = 0;

// basic calculate function, take two numbers and an operator as a parameter. 

function calculate (firstNo, secondNo, operator){
    let ans = 0;
    switch (operator){
        case 'plus':
           ans = parseInt(firstNo) + parseInt(secondNo);
           return ans;
        case 'minus':
            ans = parseInt(firstNo) - parseInt(secondNo);
            return ans;
        case 'divide':
            ans = parseInt(firstNo) / parseInt(secondNo);
            return ans;
        case 'times':
            ans = parseInt(firstNo) * parseInt(secondNo);
            return ans;

    };};
    

const reset = document.getElementById('clear');
reset.addEventListener('click',() => {
    location.reload();
});



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

const opers = document.getElementById('bottoms').querySelectorAll('.oper');
opers.forEach((oper) =>{
    oper.addEventListener('click', () => {
        i++;
        operator = (oper.id);
        showResults.textContent = operator;
        console.log(`first number is${firstNo}`);
        console.log(`second number is ${secondNo}`);
        console.log(i);
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

