const btnDigitos = document.querySelectorAll('#btnDigitos');
const result = document.getElementById('mostrarValor');
const values = {
    "num1": "",
    "num2": "",
    "expression": null,
    "calculated": false
};
 
const sumExpression = (n1, n2) => { return n1 + n2 };
const subtractionExpression = (n1, n2) => { return n1 - n2 };
const multiplicationExpression = (n1, n2) => { return n1 * n2 };
const divisionExpression = (n1, n2) => { return n1 / n2 };
 
const startCalculator = () => {
    document.body.addEventListener('keypress', (e) => {
        e.preventDefault();
 
        if(e.key.match("^[0-9\+\-\/\*\=]+$")){
            getDigits(e.key);
        }
    });
 
    btnDigitos.forEach(x => {
        x.addEventListener('click', (e) => {
            e.preventDefault();
 
            getDigits(x.innerText);
 
        })
    });
 
}
 
const getDigits = (x) => {
    switch (x) {
        case "+": {
            if (!values.num2) {
                values.expression = sumExpression;
            } else {
                calculate();
                values.expression = sumExpression;
            }
            values.calculated = false;
            showScreenCount(x);
            break;
        }
        case "-": {
            if (!values.num2) {
                values.expression = subtractionExpression;
            } else {
                calculate();
                values.expression = subtractionExpression;
            }
            values.calculated = false;
            showScreenCount(x);
            break;
        }
        case "*": {
            if (!values.num2) {
                values.expression = multiplicationExpression;
            } else {
                calculate();
                values.expression = multiplicationExpression;
            }
            values.calculated = false;
            showScreenCount(x);
            break;
        }
        case "/": {
            if (!values.num2) {
                values.expression = divisionExpression;
            } else {
                calculate();
                values.expression = divisionExpression;
            }
            values.calculated = false;
            showScreenCount(x);
            break;
        }
        case "=": {
            calculate();
            break;
        }
        case "": {
            clearScreen();
            break;
        }
        default: {
            if (values.calculated) {
                clearScreen();
            }
 
            if (!values.expression) {
                if (values.num1.length <= 14) {
                    values.num1 += x;
                    values.calculated = false;
                    showScreenCount(x);
                }
            } else {
                if (values.num2.length <= 14) {
                    values.num2 += x;
                    showScreenCount(x);
                }
            }
            break;
        }
    }
}
 
const calculate = () => {
    if (values.expression) {
        values.num1 = values.expression(parseInt(values.num1), parseInt(values.num2));
        values.num2 = "";
        values.expression = null;
        values.calculated = true;
        showScreen(values.num1.toString().substring(0, 14));
    }
}
 
const showScreen = (value) => {
    result.innerText = value;
}
 
const showScreenCount = (value) => {
    result.innerText += value;
}
 
const clearScreen = () => {
    values.num1 = "";
    values.num2 = "";
    values.expression = null;
    result.innerText = "";
 
}
 
startCalculator();
 