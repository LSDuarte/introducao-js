// hoisting
dizerOi("Ned"); // ok
//dizerOla("Marcel"); // erro | TypeError: dizerOla is not a function
//dizerTchau("Karen"); // erro | TypeError: dizerOla is not a function

// maneiras de declarar funções | tradicional
function dizerOi(nome) {
	console.log("Olá, " + nome);
}
dizerOi("Jon");
dizerOi("Rob");

// expressoes de funções - variavel | função anonima e atribuir a variavel
var dizerOla = function(nome) {
	console.log("Olá, " + nome);
}
dizerOla("Larissa");
console.log(dizerOla);


// construtor da função, argumento e conteudo da função. pouco utilizada.
var dizerTchau = new Function("nome", "console.log('Tchau, ' + nome);");
dizerTchau("Rickon");
console.log(dizerTchau);
