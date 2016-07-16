function isArray(item) {
    return (typeof item !== undefined && item && item.constructor === Array);
};

function stringDash(string, n) {
    var i,
        str = '';

    for (i = 0; i < string.length; i++) {
        if (i == n) {
            str = str + string[i] + '-';
            for (i = n + 1; i < string.length; i++) {
                str = str + string[i];
            }
        } else {
            str = str + string[i];
        }
    }
    return str;
}
/*
 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
 For example if you accept 025468 the output should be 0-254-6-8.

 */

function setDashes(string) {
    var i = 0,
        j = 0,
        strDash = string;

    for (i = 0; i < string.length; i++) {

        if (string[i] % 2 == 0 && string[i + 1] % 2 == 0) {

            strDash = stringDash(strDash, i + j);

            j = j + 1;
        }
    }

    return strDash;
};

console.log(setDashes('025468'));
console.log(setDashes('12435467689'));