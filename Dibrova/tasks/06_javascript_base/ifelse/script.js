//1
console.log('1. What numbers bigger?')

function greaterNum(a, b) {
    if (a >= b) {
        c = a;
    } else {
        c = b;
    }
    console.log('The greater number of ' + a + ' and ' + b + ' is ' + c);
}
greaterNum(2, 3);
greaterNum(7, 4);
//2
console.log('2. The World Translator')

function helloWorld(language) {
    if (language == 'en') {
        console.log('Hello, World');
    } else if (language == 'es') {
        console.log('Hola Mundo');
    } else if (language == 'de') {
        console.log('Hallo Welt');
    } else console.log('Hello, World');
}
helloWorld('en');
helloWorld('es');
helloWorld('de');
//3

console.log('3. The Grade Assigner');

function assignGrade(mark) {
    if (mark <= 100 && mark >= 80) {
        console.log("A");
    } else if (mark <= 79 && mark >= 60) {
    	console.log("B");
    } else if (mark <= 59 && mark >= 40) {
    	console.log("C");
    } else if (mark <= 39 && mark >= 20) {
    	console.log("D");
    } else if (mark <= 19 && mark >= 0) {
    	console.log("F");
    }
    
}

assignGrade(98);
assignGrade(75);
assignGrade(55);
assignGrade(35);
assignGrade(15);

//4
// function pluralize()

console.log('1.')

function script1(a) {
    if (a == 0) {
        console.log('Верно!');
    } else {
        console.log('Неверно!');
    }
}
script1(1);
script1(0);
script1(-3);

console.log('2.')

function script2(a) {
    if (a > 0) {
        console.log('Верно!');
    } else {
        console.log('Неверно!');
    }
}
script2(1);
script2(0);
script2(-3);

console.log('3.')

function script3(a) {
    if (a < 0) {
        console.log('Верно!');
    } else {
        console.log('Неверно!');
    }
}
script3(1);
script3(0);
script3(-3);

console.log('4.')

function script4(a) {
    if (a >= 0) {
        console.log('Верно!');
    } else {
        console.log('Неверно!');
    }
}
script4(1);
script4(0);
script4(-3);

console.log('5.')

function script5(a) {
    if (a <= 0) {
        console.log('Верно!');
    } else {
        console.log('Неверно!');
    }
}
script5(1);
script5(0);
script5(-3);

console.log('6.')

function script6(a) {
    if (a != 0) {
        console.log('Верно!');
    } else {
        console.log('Неверно!');
    }
}
script6(1);
script6(0);
script6(-3);

console.log('7.')

function script7(a) {
    if (a == 'test') {
        console.log('Верно!');
    } else {
        console.log('Неверно!');
    }
}
script7('test');
script7('тест');
script7(3);

console.log('8.')

function script8(a) {
    if (a == 1) {
        console.log('Верно!');
    } else if (+a == 1) {
        console.log('Верно!');
    } else { console.log('Неверно!'); }
}
script8('1');
script8(1);
script8(3);
//Работа с логическими переменными
console.log('Работа с логическими переменными');

console.log('9.');

function script9(war) {
    if (war == true) {
        console.log('Верно!');
    } else {
        console.log('Неверно!');
    }
}
script9(true);
script9(false);

function script9_2(war) {
    var message = (war == true) ? 'Верно!' : 'Неверно!';
    console.log(message);
}
script9_2(true);
script9_2(false);

console.log('10.')

function script10(war) {
    if (war != true) {
        console.log('Верно!');
    } else {
        console.log('Неверно!');
    }
}
script10(true);
script10(false);

function script10_2(war) {
    var message = (war != true) ? 'Верно!' : 'Неверно!';
    console.log(message);
}
script10_2(true);
script10_2(false);

console.log('11.')

function script11(a, b) {
    result = a + b;
    if (result > 5) {
        result = 5
    }
    console.log('result=' + result);
}
script11(2, 2);
script11(3, 3);

console.log('12.')

function script12(a) {
    if (a > 0 && a < 5) {
        console.log('Верно!');
    } else { console.log('Неверно!'); }
}
script12(5);
script12(0);
script12(-3);
script12(2);

console.log('13.')

function script13(a) {
    if (a == 0 || a == 2) {
        a = a / 10;
    } else {
        a = a + 7;
    }
    console.log(a);
}
script13(5);
script13(0);
script13(-3);
script13(2);

console.log('14.')

function script14(a) {
    if (a != 1 || a != 3) {
        console.log('Верно!');
    } else { console.log('Неверно!'); }
}
script14(1);
script14(0);
script14(3);
script14(2);

console.log('15.')

function script15(a, b) {
    if (a <= 1 && b >= 3) {
        console.log(a + b);
    } else { console.log('Неверно!'); }
}
script15(1, 3);
script15(0, 6);
script15(3, 5);

console.log('16.')

function script16(a) {
    if (a > 0 && a < 5) {
        a = a + 1;
    } else { a = a + 5 };
    console.log(a)
}
script16(5);
script16(0);
script16(-3);
script16(9);

console.log('17.')

function script17(a, b) {
    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        a = a + 2;
    } else {
        a = a + 5;
    }
    console.log(a)
}
script17(1, 6);
