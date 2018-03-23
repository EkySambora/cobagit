/* 14. Beginner Intermediate Advanced
"I Am <strong>Beginner</strong>"
Order ? Iya
maka point bertambah 2
Jika 'Tidak' maka tidak mendapatkan point

Rule:
	0 - 5 Beginner
	5 - 10 Intermediate
	10 - 15 Advanced
*/

/* --------- Mendapatkan 13 Point untuk yg bisa mengerjakan. --------- */


var konfirmasi = confirm("Order ?");
var i = 2;
if(konfirmasi){
	alert('Point anda adalah '+i);
	while(i>0){
	    if ( confirm("Mau Order lagi ?") ) {
	         var total = i+2;
	         alert('Point anda '+total);
	    }else{
	         if(total <= 5){
	         	document.getElementById("demo").innerHTML = "I am <b>Beginner</b>"; 
	         }else if(total <= 10){
	         	document.getElementById("demo").innerHTML = "I am <b>Intermediate</b>";
	         }else if(total <= 15 || total > 15){
	         	document.getElementById("demo").innerHTML = "I am <b>Advanced</b>";
	         }else if(i <= 5){
	         	document.getElementById("demo").innerHTML = "I am <b>Beginner</b>";  
	         }
	         exit;
	    }
	i=i+2;
	}
}