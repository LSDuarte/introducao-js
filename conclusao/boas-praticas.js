// boas praticas para desenvolvedor.

// ### DICA >>  1 (variaveis globais)
// >> evitar variaveis no escopo global
var variavelGlobal = "";

// >> função autoexecutada
(function(){
	var escopoLocal;
})();


// ### DICA >>  2 (hoisting) > declaração de variavel no topo
(function(){
	var escopoLocal,  // separa as variaveis em , para não repetir "var" | mesma coluna.
		escopoGlobal,
		foo;

	escopoLocal = "foo";
	console.log(escopoLocal);	
})();


// ### DICA >>  3 | Usar String com "" e não ''. Padronizar as linguagens. JS não tem o tipo CHAR | alguns compiladores não entendem ''.
var stringComDuasAspas = "Larissa";
var stringSemDuasAspas = 'Larissa';


// ### DICA >>  4 > se for simples, mesma linha, vários campos, quebrado por linha.
var obj = {foo: "bar", bar: "foo"}

var obj2 = {
	foo: "bar",
	bar: "foo",
	seila: "seila",
	foobar: "oi"
}

var array = [1, 2, 3];
var array2 = [
	1,
	2,
	3,
	4
];

// mexendo com o mesmo assunto.
