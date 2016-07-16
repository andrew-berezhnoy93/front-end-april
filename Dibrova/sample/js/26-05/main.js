var a = +prompt("input mark");
var mark;
if (100 > a && a >= 95) {
    mark = "A";
} else if (94 > a && a >= 85) {
    mark = "B";
} else if (84 > a && a >= 75) {
    mark = "C";
} else if (74 > a && a >= 65) {
    mark = "D";
} else if (64 > a && a >= 59) {
    mark = "E";
} else {
    mark = "not namber";
}



alert(mark);
