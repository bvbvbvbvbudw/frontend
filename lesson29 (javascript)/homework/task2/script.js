function result(expression) {
    const [left, operator, right] = expression.match(/^(\d+)([-+*/])(\d+)$/).slice(1);

    let result;
    switch (operator) {
        case '+':
            result = parseFloat(left) + parseFloat(right);
            break;
        case '-':
            result = parseFloat(left) - parseFloat(right);
            break;
        case '*':
            result = parseFloat(left) * parseFloat(right);
            break;
        case '/':
            result = parseFloat(left) / parseFloat(right);
            break;
    }

    document.getElementById('display').value = result;
}
