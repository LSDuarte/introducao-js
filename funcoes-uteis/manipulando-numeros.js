// manipulando números
var x = 34.00;     // 456000000
var xx = 456e5;    // 0.0000123
var xxx = 123e-6;  // 0.0000123

var z = 0.99999999999999999;
console.log(z);

var a = 0x100;
console.log(a);

var b = 07777;
console.log(b.toString(16));
console.log(b.toString(2));
console.log(b.toString(8));

console.log(x.toExponential(4));
console.log(x.toExponential(1));

var y = 123e-6;
console.log(y.toFixed(2));
console.log((3.357).toFixed(2));

console.log((3.357).toPrecision(2));