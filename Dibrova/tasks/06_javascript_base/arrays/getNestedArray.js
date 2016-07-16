/*
 10. Write a JavaScript program which prints the elements of the following array.
 Note : Use nested for loops.
 Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 Sample Output :
 "row 0"
 " 1"
 " 2"
 " 1"
 " 24"
 "row 1"
 ------
 ------
 */
function getNestedArray(array) {
    var i;

    for (i = 0; i < array.length; i++) {
        console.log('"row ' + i + '"');
        for (j = 0; j < array[i].length; j++) {
            
            console.log(array[i][j]);
        }
    }
};

getNestedArray([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);