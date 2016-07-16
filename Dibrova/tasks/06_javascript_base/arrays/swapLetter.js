/*
 9. Write a JavaScript program which accept a string as input and swap the case of each character.
 For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
 */
function join(array, separator) {

    var  i, str = array[0];

    if (typeof separator != 'string' || undefined) {
        separator = ',';
    }

    for (i = 1; i < array.length; i++) {
        str = (str + separator + array[i]);
    }

    return str;
};

function swapLetter(string) {
    var i, arr = [];

    for (i = 0; i < string.length; i++) {

        arr[i] = string[i];

        if (arr[i] == arr[i].toLowerCase()) {
            arr[i] = arr[i].toUpperCase();
        } else {
           arr[i] = arr[i].toLowerCase(); 
        }
    }
    return join(arr,'');
};

console.log(swapLetter('The Quick Brown Fox'));