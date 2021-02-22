// 3 maneiras de invocar uma função

function dizerOi(nome) {
	//console.log(this);
	console.log("Oi, " + nome);
}

//1
dizerOi("Arya");

//2
dizerOi.call({}, "Arya");

//3
dizerOi.apply({}, ["Arya"]);