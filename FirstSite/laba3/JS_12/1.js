document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft(){
	var polosa = document.getElementById('polosa');
	left = left - 240;
	if (left < -360) {
		left = 0;
	}
	polosa.style.left = left +'px';
}
var delay_popup = 5000;
	setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);