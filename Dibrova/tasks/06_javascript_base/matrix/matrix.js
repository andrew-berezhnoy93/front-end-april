var mul = document.getElementById('multiplication-matrix');
var setTable = document.getElementById('set-matrix');
var batterfly = document.getElementById('batterfly');
var pascalTriangle = document.getElementById('pascal-triangle');

setTable.innerHTML = render(setMatrix(10));
mul.innerHTML = render(setMulMatrix(10));
batterfly.innerHTML = render(setBatterfly(10));
pascalTriangle.innerHTML = render(setPascalTriangle(10));


function setMatrix(size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array[i] = [];
        for (var j = 0; j < size; j++) {
            array[i][j] = j + 1;
        }
    }
    return array;
}

function setMulMatrix(size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array[i] = [];
        for (var j = 0; j < size; j++) {
            array[i][j] = (j + 1) * (i + 1);
        }
    }
    return array;
}

function setBatterfly(size) {
    var matrix = [];
    for (var i = 0; i < size; i++) {
        matrix[i] = [];
        for (var j = 0; j < size; j++) {
            if (i == j) { matrix[i][j] = 1 };
            if (j == size - 1 - i) { matrix[i][j] = 2 };
            if (j > i && j < size - 1 - i) { matrix[i][j] = 3 };
            if (j < i && j > size - 1 - i) { matrix[i][j] = 5 };
            if (i > j && i < size - 1 - j) { matrix[i][j] = 6 };
            if (i < j && i > size - 1 - j) { matrix[i][j] = 4 };
        }
    }
    return matrix;
}

function setPascalTriangle(size) {
    var triangle = [];
    for (var i = 0; i < size; i++) {
        triangle[i] = [];
        for (var j = 0; j < size; j++) {
            if (j <= i) {
                if (i == j) { triangle[i][j] = 1 } else {
                    triangle[i][0] = 1;
                    if (i > 1) {
                        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
                    }
                }
            }
        }
    }
    return triangle;
}

function render(array) {
    var rowsQty = array.length;
    var result = [];
    for (var i = 0; i < rowsQty; i++) {
        var row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
        result.push(row);
    }

    return result.join('');
}
