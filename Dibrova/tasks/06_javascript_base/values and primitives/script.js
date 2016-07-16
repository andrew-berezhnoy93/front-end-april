//1
var numberChildren=2,
partnerName='oksana',
geographicLocation='Ukraine',
jobTitle='js';
console.log('You will be a ' + jobTitle + ' in ' + geographicLocation + 
	', and married to ' + partnerName + ' with ' + numberChildren + ' kids.');
//2
var currentYear=2016,
birthYear=1973,
age1=currentYear-birthYear,
age2=age1-1;
console.log('They are either ' + age1 + ' or ' + age2);
//3
var currentAge=43,
maximumAge=100,
estimatedAmount=(maximumAge-currentAge)*365,
eatTotal=estimatedAmount*1;
console.log('You will need ' + eatTotal + ' to last you until the ripe old age of ' + maximumAge);
//4
var radius=1,
diameter=radius*2,
circumference=Math.PI*diameter,
AreaOfCircle=Math.PI*Math.pow(radius,2);
console.log('The circumference is ' + circumference);
console.log('The area is ' + AreaOfCircle);
//5
var celsiusTemperature=20,
fahrenheitTemperature=celsiusTemperature*9/5+32;
console.log(celsiusTemperature + '°C is ' + fahrenheitTemperature + '°F');
fahrenheitTemperature=69,
celsiusTemperature=(fahrenheitTemperature-32)*5/9;
console.log(fahrenheitTemperature + '°F is ' + celsiusTemperature + '°C');