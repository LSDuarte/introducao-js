// manipulando arrays

var array = "Ned Jon Robb Bran Rickon".split(' ');
console.log(array); // transforma em array

console.log(array.toString()); // transforma em string
console.log(array.join(' '));  // muda os separadores
console.log(array.join(', ')); 
console.log(array.join(' / '));

array.push("Sansa");    // adiciona string ao array no final
console.log(array); 

array.unshift("Sansa"); // adiciona string ao array no inicio
console.log(array);

var elemento = array.pop(); // remove no final
elemento = array.shift();   // remove no inicio

console.log(elemento);
console.log(array);

array[1] = "Jon Snow"; // altera o valor da posição 1
console.log(array);

var slice = array.slice(3);
console.log(slice);

var slice = array.slice(3,4);
console.log(slice);

var splice = array.splice(1,1,"Area", "Sansa");
console.log(array);

array.splice(3,1);
console.log(array);

var array2 = array.concat(splice, slice);
console.log(array2);

// teste merge sublime
var array2 = array.concat(splice, slice);
console.log(array2);