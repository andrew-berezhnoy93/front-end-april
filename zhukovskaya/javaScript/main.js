/*

var a = +prompt("Введите число а");
var b = +prompt("Введите число b");
console.log (a, b);
var c = a + b;
alert(c);


var x = +prompt("Введите кол-во баллов от 0 до 100")ж
var mark;
if(x>100) {
	mark = A+
}	else if(100 >= x && x =< 95) {
	mark = "A";
} else if(94 >= x && x <= 85) {
	mark = "B";
}	else if(84 >= x && x <= 75) {
	mark = "C";
}	else if(74 >= x && x <= 65) {
	mark = "D";
} 	else if(64 >= x && x <= 60) {
	mark = "E";
}	else if(59 >= x && x <= 0) {
	mark = "FX";
}	else {
	"enter balls";
};


alert(mark);
*/

var numberOfChildren = 3,
	partnerName = "Ann",
	geographicLocation = "Canada", 
	jobTitle = "driver";

console.log ("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids.");


var correntYear = 2016,
	birthYear = 1985,
	age1,
	age2;

age1 = correntYear - birthYear;
age2 = age1-1;
console.log ("They are either " + age1 + " or " + age2 + ".");

var age = 31,
	maxAge = 100,
	applesPerDay = 2,
	appelesPerLife;
	
appelesPerLife = (maxAge - age) * 365 * applesPerDay;
console.log ("You will need " + appelesPerLife + " apples to last you until the ripe old age of " + maxAge + " .");



var i,
	mark;
for (i = 0; i<5; i+=1) {
	mark = prompt("Enter mark")
	if (mark >= 60) {
		prompt("passed");
	} else {
		break;
	}
}

var perform;
var number1 = +prompt("Enter first number ")
var number 2  = +prompt("Enter second number ")
while (stop) {
	perform = prompt ("Enter what move you want!")

	switch(peerform) {
		case "Addition" :
		console.log(number2 + number 1);
		case "Addition" :
		console.log(number2 + number 1);
		break;
		case "That's all" :
		stop = false;
		break;
		befault:
			console.log("Wrong operation")
	}
}