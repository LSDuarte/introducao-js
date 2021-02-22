// objetos em javascrpit - quase tudo em js é objeto

var obj = {
	nome: "Jon",
	sobrenome: "Snow",
	idade: 16,
	apresentar: function(){
		console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
	},
	// apresentar: apresentacao  >> duas formas ^
};
console.log(obj.nome);
obj.apresentar();

function apresentacao() {
	console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
}
obj.apresentar();