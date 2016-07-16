var mul = document.getElementById('multiplicator-matrix');
var setTable = document.getElementById('set-matrix');

setTable.innerHTML = render(setMatrix(10));
mul.innerHTML = render(setMulMatrix(10));

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



function render(array) {
    var rowsQty = array.length;
    var result = [];
    for (var i = 0; i < )

}
