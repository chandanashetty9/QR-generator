let qrtext=document.querySelector("#qrtext");
let qrimage=document.querySelector("#qrimage");
let image=document.querySelector(".image");
function generateQr(){
	qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
	qrtext.value=""

}