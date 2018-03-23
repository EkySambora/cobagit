/* 6. Melakukan operator aritmatika
dari dua bilangan yakni 10 dan 18

tentu menentukan operasinya melalui inputan prompt
bisa berupa operator ( + - * / )

*/

/* --------- Mendapatkan 5 Point untuk yg bisa mengerjakan. --------- */
var angka = 10;
var angka2 = 18;

var opr = prompt(" hasil dari 10 & 18 Masukan Operator (+ - * /)")
if(opr == "+"){
	document.write(angka + angka2);
	console.log(angka + angka2);
}else if(opr == "-"){
	document.write(angka - angka2);
	console.log(angka - angka2);
}else if(opr == "*"){
	document.write(angka * angka2);
	console.log(angka * angka2);
}else if(opr == "/"){
	document.write(angka / angka2);
	console.log(angka / angka2);
}else{
	alert('anda tidak masukan operator');
}

