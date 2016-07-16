/*
 17. Write a JavaScript program to shuffle an array.
 */
function shuffleArray(array) {
    var i, x, y;

    for (i = 0; i < array.length; i++) {

        y = Math.floor(Math.random() * i);

        x = array[i];  
        array[i] = array[y];  
        array[y] = x; 
    }
    return array;
}

console.log(shuffleArray([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]));