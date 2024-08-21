let expression = '';
let isNewEntry = true;

function clearDisplay(){
    expression = '';
    isNewEntry = true;
    document.getElementById('output').value = '0';
}

function addNumber(value){
    if (isNewEntry){
        expression = value.toString();
        isNewEntry = false;
    }
    else{
        expression += value;
    }
    document.getElementById('output').value = expression;
}

function addDecimal(){
    if (isNewEntry){
        expression = '0.';
        isNewEntry = false;
    }
    else if(!expression.includes('.')){
        expression += '.';
    } 
    document.getElementById('output').value = expression;
    
}

function performOperation(operator){
    if (expression !== '' && !isNewEntry){
        expression += operator;
        isNewEntry - false;
        document.getElementById('output').value = expression;
    }
}
function percentage(){
    if (expression !== '' && !isNewEntry){
        try{
            let result = eval(expression) /100;
            if (!isFinite(result) || isNaN(result)){
                throw new Error('Invalid expression');
            }
            expression = result.toString();
            isNewEntry = true;
            document.getElementById('output').value = expression;
        } catch(error){
            document.getElementById('output').value = 'Error';
            isNewEntry = true;
        }
    }
}
function square(){
    if (expression !== '' && !isNewEntry){
        try{
            let result = Math.pow(eval(expression), 2);
            if (!isFinite(result) || isNaN(result)){
                throw new Error('Invalid expression');
            }
            expression = result.toString();
            isNewEntry = true;
            document.getElementById('output').value = expression;
        } catch(error){
            document.getElementById('output').value = 'Error';
            isNewEntry = true;
        }
    }
}
function squareRoot(){
    if (expression !== '' && !isNewEntry){
        try{
            let result = Math.sqrt(eval(expression));
            if (!isFinite(result) || isNaN(result)){
                throw new Error('Invalid expression');
            }
            expression = result.toString();
            isNewEntry = true;
            document.getElementById('output').value = expression;
        } catch(error){
            document.getElementById('output').value = 'Error';
            isNewEntry = true;
        }
    }
}
function calculate(){
    
    if (expression !== '' && !isNewEntry){
        try{
            let result = eval(expression);
            if (!isFinite(result) || isNaN(result)){
                throw new Error('Invalid expression');
            }
            expression = result.toString();
            isNewEntry = true;
            document.getElementById('output').value = expression;
        } catch(error){
            document.getElementById('output').value = 'Error';
            isNewEntry = true;
        }
    }
}