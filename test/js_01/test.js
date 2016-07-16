// // false;
// var num1 = '10',
// 	num2 = '9';
// console.log(num1 > num2);

// // number 
// (function f(f) {
// 	return typeof f();
// })(function() {
// 	return 1;
// });

// // 19
// var num3 = "10",
// 	num4 = "9";
// console.log((+num3)+(+num4));

// undefined 
// var a = {
// 	b : function () {
// 		return this.c;
// 	},
// 	c : 1
// };

// (function() {
// 	console.log(typeof arguments[0]())
// })(a.b)


// 3 2
// var elem1 = document.getElementsByTagName('a'),
// 	elem2 = document.querySelectorAll('a');
// document.body.appendChild(document.createElement('a'));
// console.log(elem1, elem2.length);

// var o = {
// 	x: 8,
// 	valueOf : function() {
// 		return this.x + 2;
// 	},
// 	toString : function() {
// 		return this.x.toString();
// 	}
// };

// var o = {
// 	x: 8,
// 	valueOf : function() {
// 		return this.x + 2;
// 	},
// 	toString : function() {
// 		return this.x.toString();
// 	}
// };

// var retults = o < "9";
// alert(o);
// console.log(typeof null)

// (function f() {
//     function f() {
//         return 1;
//     }

//     return f();

//     function f() {
//         return 2;
//     }
// })();

var f = function g() {
	return 23;
}

console.log(f)
console.log( typeof g());
