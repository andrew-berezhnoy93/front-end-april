var expresion, result;
while (true) {
    expresion = prompt('Enter an expresion');
    if (expresion == null) break;
    try {
        result = eval(expresion)

        if (isNaN(result)) {
            throw new Error('Неправильное выражение')
        }
        break;

    } catch (error) {
        alert('Not correct imput: ' + error.mesage)
    }


}

alert(result);
