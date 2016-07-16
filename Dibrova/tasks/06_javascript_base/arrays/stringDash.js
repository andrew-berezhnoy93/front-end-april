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
        // console.log('str ' + str);
    }

    return str;
    // console.log('string.length' + string.length);

}

console.log(stringDash('0-25468', 3));
