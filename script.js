var elementButtonClass = document.getElementsByClassName("button");
var ilosc_Elementow = elementButtonClass.length;
var textContent ="";
for (var i = 0; i< ilosc_Elementow; i++){
	textContent = elementButtonClass[i];
	console.log(textContent.innerText);
}
