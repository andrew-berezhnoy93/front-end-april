// Calculator via prompt

// document.write("result : ");
// var firstNumber=prompt('Please, enter first number');
// var operators=prompt('Please, enter operator');
// var secondNumber=prompt('Please, enter second number');
// document.write(eval(firstNumber+operators+secondNumber));

// letter by the mark

var inputNumber = prompt ("Please, enter number :");
var mark;
if (100>=inputNumber && inputNumber>=0) {
  if (inputNumber >= 95) {
  		mark = "A";
  	} else if (inputNumber >= 85) {
  			mark = "B";
  	  } else if (inputNumber >= 75) {
  				mark = "C";
  			} else if (inputNumber >= 65) {
  					mark = "D";
  				} else if (inputNumber >= 60) {
  						mark = "E";
  					} else if (inputNumber >= 0) {
  							mark = "FX";}
} else alert("Wrong number");
if (mark != undefined) {
	document.write(mark);}

