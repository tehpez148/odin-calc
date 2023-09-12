let display = '';
let firstNo = '1';
let secondNo = '1';
let operator = '';

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
    





const buttons = document.getElementById('bottoms').querySelectorAll('.digits');
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        let i = 0;
        switch (i){
            case 0:
                firstNo = Number(button.id);
                showResults.textContent = Number(button.id);
                i++;
            case 1:
                secondNo = Number(button.id);
                showResults.textContent = Number(button.id);
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

