/* 10. Melakukan perulangan while yg nilai awalnya mulai dari 1
Dengan menampilkan alert dengan tulisan 
cetak bilangan 1, bilangan 2, bilangan 3 ...

Perulangan itu akan berhenti ketika
kita menekan tombol cancel pada dialog confirmnya

dan pada akhirnya kita akan tampilkan
semua hasil perulangan didalam console 

tentu proses perulangan akan terjadi ketika kita menekan tombol OK
pada dialog confirmnya */


/* --------- Mendapatkan 7 Point untuk yg bisa mengerjakan. --------- */

var konfirm = confirm('Melakukan perulangan??');
var a = 1;
var b = 2;
if(konfirm){
	console.log('Cetak bilangan '+ a);
	alert('Cetak bilangan '+ a)
	while(b>0){
		if(confirm('Ingin Melakukan Perulangan lagi?')){
			console.log('Cetak bilangan '+ b);
			alert('Cetak bilangan '+ b);
		}else{
			break;
		}
		b++;
	}
}