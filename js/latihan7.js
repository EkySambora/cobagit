/* 7. Latihan for berdasarkan inputan promptnya
dan diberi batas maximalnya 10 point

dan menguji if bersarang
1 = Premium
5 = Pro
10 = Ultimate 

*/

/* --------- Mendapatkan 5 Point untuk yg bisa 
mengerjakan. --------- */
var angka = prompt("masukan angka");

for(nilai=angka; nilai<=10; nilai++){
	if (nilai == 1) {
		alert(nilai + " = Premium")
		break;
	}else if(nilai == 5){
		alert(nilai + " = Pro")
		break
	}else if(nilai == 10){
		alert(nilai + " = Ultimate")
	}else{
		alert("masukan yang benar");
		break;
	}
}