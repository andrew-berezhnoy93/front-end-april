/*
 8. Write a JavaScript program to find the most frequent item of an array.
 Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 Sample Output : a ( 5 times )
 */
function mostFrequent(array) {
    var i, j, n = 0,
        a, b, arrN = [];

    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {

            if (array[i] === array[j]) {
                n = n + 1;
            }
        }
        arrN[i] = n;
        n = 0;
    }

    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {

            if (arrN[j] > arrN[i]) {
                a = array[j];
                b = arrN[j];
            }
        }
    }
    return console.log(a + ' ( ' + b + ' times )');
};

console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
console.log(mostFrequent([3, 'a', 'a', 9, 9, 'a', 2, 3, 9, 'a', 3, 'a', 2, 4, 9, 9, 9, 3]));
