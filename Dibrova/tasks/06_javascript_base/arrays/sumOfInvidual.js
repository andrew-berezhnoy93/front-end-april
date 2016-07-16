/*
 19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
 Sample array :
 array1 = [1,0,2,3,4];
 array2 = [3,5,6,7,8,13];
 Expected Output :
 [4, 5, 8, 10, 12, 13]
 */
function sumOfInvidual(array1, array2) {
    var i, array;

    if (array1.length > array2.length) {
        array = array1;
    } else {
        array = array2;
    }

    for (i = 0; i < array.length - 1; i++) {
        array[i] = array1[i] + array2[i];
    }    
    return array;
};

console.log(sumOfInvidual([1,0,2,3,4], [3,5,6,7,8,13]));

