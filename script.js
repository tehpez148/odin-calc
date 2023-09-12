let display = '';
let firstNo = '';
let secondNo = '';
let operator = '';
let i = 0;

// basic calculate function, take two numbers and an operator as a parameter. 

function calculate (firstNo, secondNo, operator){
    let ans = 0;
    switch (operator){
        case 'add':
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
        switch (i){
            case 0:
                firstNo += Number(button.id);
                showResults.textContent = firstNo;
                
            case 1:
                secondNo += Number(button.id);
                showResults.textContent = secondNo;
                i++
        }
        
    });
});




const goButton = document.getElementById('equals');
goButton.addEventListener('click', () =>{
    console.log(firstNo);
    console.log(secondNo);
    console.log(calculate(firstNo, secondNo, 'add'));
    showResults.textContent = calculate(firstNo,secondNo,'add');
});





const container = document.getElementById('screen');

const showResults = document.createElement('p');


container.appendChild(showResults);




console.log(firstNo);
console.log(secondNo);

