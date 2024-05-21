function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                return "Деление на ноль!";
            }
        default:
            return "Неподдерживаемая операция";
    }
}

let a = parseFloat(prompt("Введите первое число:"));
let b = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите математическую операцию (+, -, *, /):");

if (isNaN(a) || isNaN(b)) {
    alert("Один из введенных параметров не является числом.");
} else {
    alert("Результат: " + calculate(a, b, operator)); 
}






