/* 12. Memfilter mana bilangan ganjil mana bilangan genap
dari hasil nilai array berikut
[2, 9, 10, 3, 7, 1]

Pastikan kita siapkan array kosong.
Untuk array ganjil dan genapnya */

/* --------- Mendapatkan 10 Point untuk yg bisa mengerjakan. --------- */

var bil = [2, 9, 10, 3, 7, 1];
var ganjil = [];
var genap = [];
var a = 0;

for(i = 0; i < bil.length; i++){
     if (bil[i] % 2 == 0) {
        genap[i] = bil[i];
     }else if (bil[i] % 2 == 1) {
        ganjil[i] = bil[i];
     }
}
console.log(ganjil);
console.log(genap);
