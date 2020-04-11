var selectedColor= "red";

var vestido = document.getElementsByClassName("parte");

var colores = document.getElementsByClassName("color");

for (var i = colores.length - 1; i >= 0; i--) {
	colores[i].addEventListener("click", function(){
		selectedColor = this.style.backgroundColor
	})
}

for (var i = vestido.length - 1; i >= 0; i--) {
	vestido[i].style.fill = "FFFFFF";
}

for (var i = vestido.length - 1; i >= 0; i--) {
	vestido[i].addEventListener("click", function(){
		this.style.fill = selectedColor;
	})
}
		