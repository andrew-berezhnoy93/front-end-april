function isArray(item) {
    return (typeof item !== undefined && item && item.constructor === Array);
};

/*
 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
 For example if you accept 025468 the output should be 0-254-6-8.

 */

function setDashes(string) {
    var i,
        j = 0,
        z, n,
        strDash = string,
        str;

    for (i = 0; i < string.length; i++) {

        if (string[i] % 2 == 0 && string[i + 1] % 2 == 0) {

            str = '';
            n = i + j;

            for (z = 0; z < strDash.length; z++) {
                if (z == n) {
                    str = str + strDash[z] + '-';
                    for (z = n + 1; z < strDash.length; z++) {
                        str = str + strDash[z];
                    }
                } else {
                    str = str + strDash[z];
                }
            }
            j = j + 1;
            strDash = str;
        }
    }
    return strDash;
};

console.log(setDashes('025468'));
console.log(setDashes('12435467689'));
