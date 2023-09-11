

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
    

console.log(calculate (3,2, 'add'));
console.log(calculate(3,2, 'minus'));
console.log(calculate(4,2,'divide'));
console.log(calculate(3,2, 'times'));

