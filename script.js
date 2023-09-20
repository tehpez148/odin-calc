
// declares variables for various functions.
let display = '';
let firstNo = '';
let secondNo = '';
let operator = '';
let i = 0;
let answer = 0;



// basic calculate function, take two numbers and an operator as a parameter. 

function calculate (firstNo, secondNo, operator){
    let ans = 0;
    switch (operator){
        case '+':
           ans = parseFloat(firstNo) + parseFloat(secondNo);
           return ans;
        case '-':
            ans = parseFloat(firstNo) - parseFloat(secondNo);
            return ans;
        case '/':
            ans = parseFloat(firstNo) / parseFloat(secondNo);
            return ans;
        case 'x':
            ans = parseFloat(firstNo) * parseFloat(secondNo);
            return ans;

    };};

// reset function if clear button is pressed
const reset = document.getElementById('clear');
reset.addEventListener('click',() => {
     display = '';
     firstNo = '';
     secondNo = '';
     operator = '';
     i = 0;
     showResults.textContent = '';
     showEquation.textContent = '';
     goButton.disabled = false;
     dotButton.disabled = false;
    
});

const backSpace = document.getElementById('delete');
backSpace.addEventListener('click',() =>{
    if (secondNo != ''){
        secondNo = showResults.textContent.slice(0,-1);
        showResults.textContent = showResults.textContent.slice(0,-1);}
    else if (operator != '') {
        operator = showResults.textContent.slice(0,-1);
        showResults.textContent = showResults.textContent.slice(0,-1);
        showEquation.textContent = showEquation.textContent.slice(0,-1);}
    else if (firstNo != ''){
        firstNo = showResults.textContent.slice(0,-1);
        showResults.textContent = showResults.textContent.slice(0,-1);
        showEquation.textContent = showEquation.textContent.slice(0,-1);
    } 


});

// adds an event listener all buttons with digits, allocated button to either firstNo or secondNo based on an i value.
const buttons = document.getElementById('bottoms').querySelectorAll('.digits');
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        if (i === 0){
                firstNo += (button.id);
                
                showResults.textContent = firstNo;
                for( let j = 0; j <opers.length; j++){opers[j].disabled=false;}}
        if (i === 1){
                secondNo += (button.id);
                showResults.textContent = secondNo;
                
                for( let j = 0; j <opers.length; j++){opers[j].disabled=false;}
        } else if (i === 2) {
            secondNo += (button.id);
            
            showResults.textContent = secondNo;
            for( let j = 0; j <opers.length; j++){opers[j].disabled=false;}
        }
        
    });
});

//Adds an event listener to all buttons with operators. Changes i value to allow the next digit button pressed
// to be allocated to secondNo. If secondNo has been pressed already, calculate the two values so far and allocate 
// the result to the firstNo, and then allows for a new secondNo to be allocated by clearing the old secondNo value.
const opers = document.getElementById('bottoms').querySelectorAll('.oper');
for ( let j = 0; j <opers.length; j++){opers[j].disabled=true;};
opers.forEach((oper) =>{
    oper.addEventListener('click', () => {
        if ( i === 0){
            i++;
            operator = (oper.id);
            showEquation.textContent += firstNo;
            showEquation.textContent += operator;
            showResults.textContent = operator;
            dotButton.disabled = false;
            console.log(operator);
            console.log(i);
            for (let j = 0; j <opers.length; j++){opers[j].disabled=true;};}
       
         else if (i === 1){
            
            firstNo = calculate(firstNo,secondNo,operator);
            secondNo = '';
            operator = (oper.id);
            showEquation.textContent += firstNo;
            showEquation.textContent += operator;
            showResults.textContent = operator;
            dotButton.disabled = false;
            console.log('this is happening');
            for(let j = 0; j <opers.length; j++){opers[j].disabled=true;}
            
        } else {
            
            showEquation.textContent = answer;
            firstNo = answer;
            secondNo = '';
            operator = (oper.id);
            showResults.textContent = operator;
            showEquation.textContent += firstNo;
            showEquation.textContent += operator;
            dotButton.disabled = false;
            goButton.disabled = false;
            console.log('no this is happening');
            for(let j = 0; j < opers.length; j++){opers[j].disabled=true;}
        }
    });
});



//runs calculate function on current firstNo and secondNo values with last given operator. Rounds to 1st decimal place. 
//does nothing if no secondNo is given yet.
const goButton = document.getElementById('equals');
goButton.addEventListener('click', () =>{
    if (secondNo === '')
        {}
    else if (operator ==='/' && secondNo === '0'){
        alert("no ;)")
        location.reload();
    }
    else{
    
    console.log(firstNo);
    console.log(secondNo);
    console.log(calculate(firstNo, secondNo, operator));
    answer = calculate(firstNo,secondNo,operator);
    showEquation.textContent += secondNo;
    showEquation.textContent += ("=" + (Math.round(answer) *10)/10);
    showResults.textContent = (Math.round(answer * 10) / 10);
    dotButton.disabled = false;
    goButton.disabled = true;
    opers.disabled = false;
    i =2;}
});

// disables dot button on first press, which is reset by operator function
const dotButton = document.getElementById('.');
dotButton.addEventListener('click', () =>{
    dotButton.disabled = true;
});




// adds results to 'screen' div
const currentContainer = document.getElementById('current');
const showResults = document.createElement('p');
currentContainer.appendChild(showResults);

//adds running equation to 'screen' div
const equationContainer = document.getElementById('equation');
const showEquation = document.createElement('p');
equationContainer.appendChild(showEquation);





