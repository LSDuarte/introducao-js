// for, for in, while, do while

var x = 1;

/*while(x <= 10) {
	console.log("x é igual a " + x);
	x++;
}
do {
	console.log("x é igual a " + x);
	x++;
} while(x <= 10)
*/

for (var i= 0; i <= 10; i++) {
	console.log("i é igual a " + i);
}

var obj = {
	nome: 'Jon',
	sobrenome: 'Snow'
};

for (var prop in obj) {
	console.log(prop);
}

for (var prop in obj) {
	console.log(obj[prop]);
}