// for (var i = 0; i < document.getElementById('AddContact').length; i++) {
//     console.dir(document.getElementById('AddContact')[i]);
// }



// name.onblur = function () {
// 	console.log(this.value);
// }

// AddContact.addEventListener("focus", function() {
	// console.log(name.value);
// })



var ImName = document.getElementById('name');
 
console.log(ImName);

ImName.oninput = function () {
	console.log(ImName.value);
}