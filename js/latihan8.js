/*
8. Menghitung digit 'no_telpon' max 12 karakter 
menggunakan prompt bila lebih dari 12 maka tampilkan notif
dan inputannya pun tidak boleh kosong.
*/

/* --------- Mendapatkan 5 Point untuk yg bisa mengerjakan. --------- */

var no = prompt('Masukan no telepon :')

if(no.length == " "){
	alert("tidak Boleh kosong")
}else if(no.length > 12){
	alert("Tidak boleh Lebih Dari 12 Nomor")
}else if(no.length <= 12){
	alert(no)
}