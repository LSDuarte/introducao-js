// criando um prototype
function Stark(nome, idade, carDoCabelo) {
	this.nome = nome;
	this.idade = idade;
	this.corDoCabelo = carDoCabelo;

	this.sobrenome = "Stark";
	this.apresentar = function() {
		console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
	}
}
var ned = new Stark("Ned", 40, "Preto");
Stark.prototype.darTchau = function() {console.log("Tchau");};
ned.apresentar();
ned.darTchau();

var sansa = new Stark("Sansa", 13, "Cobre");
sansa.apresentar();
sansa.darTchau();

//console.log(ned);
//console.log(sansa);

console.log("--------------------------------------------------------------");

String.prototype.apagar = function() {
	return "";
}
console.log("Oi".apagar());