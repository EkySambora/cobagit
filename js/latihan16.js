/* 16. Misalnya kita punya array angka 
[2, 9, 10, 3, 7, 1]
Lalu hitung total keseluruhan dari isi array angka tersebut 
tidak boleh menggunakan method dari javascript */
var angka = [2, 9, 10, 3, 7, 1];

var jum = angka.reduce(function(total, angka){
	return total + angka;
});
document.write("angka = [2, 9, 10, 3, 7, 1];<br>");
document.write("adalah "+ jum);
console.log(jum)