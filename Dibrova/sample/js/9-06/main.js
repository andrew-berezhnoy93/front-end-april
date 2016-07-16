// function sum(a) {
// 	return function(b) {
// 		return a + b;
// 	};
// };
// var sumALL = sum(1);
// console.log(sumALL(2));

var Closure = (function () {
	var text = 'Hello';

	function concat(name) {
		return text + ' ' + name;
	}
	return {
		getName : function(name) {
			return concat(name);
		}

	}
	
})

var greeting = Closure();
console.log(greeting.getName('Vlad'));

