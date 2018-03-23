/* 9. Buatkan array colors sebagai berikut

Lalu tampilkan ke daftar list document HTML
dan berikan warna background sesuai dengan array colorsnya */

/* --------- Mendapatkan 5 Point untuk yg 
bisa mengerjakan. --------- */

var colors = ['salmon', 'lightgreen', '#ccc', 'aqua'];
var jumlah = colors.length -1;
var list = document.getElementById("list");

console.log(list)
for(i=0;i<=jumlah; i++){
	list.innerHTML +=  "<li style='background:"+colors[i]+"'>"+colors[i] + "</li>" 
}


