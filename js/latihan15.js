/*
15. Manipulasi array (tambah, hapus)
dengan Membuat Aplikasi Angkot Sederhana

============ Flow =========== 
Apakah angkot dijalankan? Iya/Tidak
	- Tekan Oke. Maka Ditanya ada yg naik?

		- Ada/Oke. Masukkan Jumlah Penumpang yg naik?
		Lalu masukkan nama" penumpangnya sesuai dengan jumlah yg naik.

		- Tidak/Cancel. Cek bila angkotnya masih kosong maka angkot jalan lagi.
		Tapi kalo ada penumpangnya maka 
		dicek penumpang keberapa yg akan turun ?

		berikan info bahwa penumpang turun.
		Maka angkot jalan lagi.

			- Jika berhenti/cancel. Maka tampil info jumlah penumpang yg ada.
			dan console array angkotnya.

	- Tekan Cancel. Maka akan tampil notif 
jumlah penumpangnya masih kosong
	dan console log array angkotnya
*/


/* --------- Mendapatkan 20 Point untuk yg bisa mengerjakan. --------- */

var tanya = confirm("apakah angkot di jalankan?");
var penumpang = [];
if(tanya == true){
	if(confirm('Apa Ada yang Naik?')){
		var jmlpenumpang = prompt('masukan Jumlah penumpang yang naik?');
		var i = 0;
		while(i<jmlpenumpang){
			var namapenumpang = prompt('masukan nama nama penumpang yang naik');
			var e = jmlpenumpang.push(prompt('Nama Penumpang Ke- ' + (i++)));
			console.log(e)
		}
	}else{
		if(i == jmlpenumpang){
			if(confirm('angkot masih kosong?')){
				alert('angkot jalan lagi')
			}else{
				confirm('angkot ada penumpangnya?')
			}	
		}
		
	}
}