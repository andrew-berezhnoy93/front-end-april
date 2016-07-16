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
			array[i][j] = (j+1)*(i+1);
		}
	}
	return array;
}

function setBatterfly(size) {
	var matrix = [];

	return matrix;
}

function setPascalTriangle(size) {
	var triangle = [];

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