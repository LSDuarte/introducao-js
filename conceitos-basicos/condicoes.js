// if (boolean) {}

//var x = 17; // undefined
var x = 16; // maior
var y;
if (x > 18) {
	y = "maior";
} else if(x==18) {
	y = "igual";
}else {
	y = "menor";
}
console.log(y);

// == igual
// > maior que
// < menor que
// >= maior ou igual a que
// <= menor ou igual a que

switch(x) {
	case 18:
	 y = 'dezoito';
	 break;
	case 19:
	 y = 'dezenove';
	 break;
	default: 
	 y = 'sei lá';
}
console.log(y);
