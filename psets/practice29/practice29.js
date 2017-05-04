


function do_math(num1, num2, operator){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
        case 'x':
        case 'X':
            return num1 * num2;
        default:
            console.log("Please specify: (a number, a number, an operator).");
            return "Thank you.";
    }
}