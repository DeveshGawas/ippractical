function calci(op: string): void {
    let num1 = Number(
        (document.getElementById('num1') as HTMLInputElement).value
    );
    let num2 = Number(
        (document.getElementById('num2') as HTMLInputElement).value
    );
    let result: number = 0;
    const resultElement = document.getElementById('result');

    switch (op) {
        case '+':
            result = num1 + num2;
            if (resultElement) resultElement.innerHTML = "Addition: " + result;
            break;
        case '-':
            result = num1 - num2;
            if (resultElement) resultElement.innerHTML = "Subtraction: " + result;
            break;
        case '*':
            result = num1 * num2;
            if (resultElement) resultElement.innerHTML = "Multiplication: " + result;
            break;
        case '/':
            if (num2 === 0) {
                if (resultElement) resultElement.innerHTML = "Error: Cannot divide by zero";
            } else {
                result = num1 / num2;
                if (resultElement) resultElement.innerHTML = "Division: " + result;
            }
            break;
    }
}
