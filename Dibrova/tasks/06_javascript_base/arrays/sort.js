/*
 7. Write a JavaScript program to sort the items of an array.
 Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
 Sample Output : -4,-3,1,2,3,5,6,7,8
 */
function sort(array) {
    var i, j, n;

    for (i = 0; i < array.length - 1; i++) {

        for (j = 0; j < array.length - 1 - i; j++) {
        	
        	if (array[j + 1] < array[j]) {
        		n = array[j + 1];
        		array[j + 1] = array[j];
        		array[j] = n;        		
        	} 
        }
    }
    return array;
};

console.log(sort([3, 8, 7, 6, 5, -4, 3, 2, 1]));
