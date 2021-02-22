// variaveis locais e globais
function tick() {
	var contador = 0;
	contador++;
	console.log(contador);
}

tick();
tick();
tick();
console.log("-------------");

// closure
var tick = (function(){
	var contador = 0;

	return function() {
		contador++;
		console.log(contador);
	}
})();
tick();
tick();
tick();