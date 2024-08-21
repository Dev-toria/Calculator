let expression = '';

function addNumber(value){
    expression += value;
    document.getElementById('output').value = expression;
}

function addDecimal(){
    if (!expression.includes('.')){
        expression += '.';
        document.getElementById('output').value = expression;
    }
}

function performOperation(operator){
    if (expression !== ''){
        expression += operator;
        document.getElementById('output').value = expression;
    }
}
function calculate(){
    if (expression !== ''){
        try{
            let result = eval(expression);
            if (!isFinite(result) || isNaN(result)){
                throw new Error('Invalid expression');
            }
            expression = result.toString();
            document.getElementById('output').value = expression;
        } catch(error){
            document.getElementById('output').value = 'Error';
        }
    }
}