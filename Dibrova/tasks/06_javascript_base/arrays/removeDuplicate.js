function removeDuplicate(array) {
    var i, j, x = 0, y = 0, z =0, arrRemove = [], arr = array;

    for (i = 0; i < array.length; i++) {
        x++;
        
        for (j = x; j < array.length; j++) {
            if (array[i] == array[j]) {
                arr[j] = '';
                y++;
            }
        }
    }

    for (i = 0; i < array.length; i++) {
        if (array[i] == '') {
            z++;
        } else {
          arrRemove[i - z] = array[i];
        }
    }
     return console.log(arrRemove);
}
removeDuplicate([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]);
