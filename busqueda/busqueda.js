const searching = document.getElementById("mySearch");

function search() {
	var acumErrores = 0;
	
	searching.classList.remove('is-invalid');

    var input_search = document.getElementById('input_search');

	if(input_search.value == "") {
		input_search.classList.add("is-invalid");
		document.getElementById("input_logIn").style.paddingTop = "20px";
		document.getElementById("errorSearch").textContent = "Este campo es obligatorio!";
        acumErrores ++;
    }else if(input_search.value.length < 4){
		input_search.classList.add("is-invalid");
		document.getElementById("input_logIn").style.paddingTop = "20px";
		document.getElementById("errorSearch").textContent = "Debe ser mayor de 3 caracteres!";
		acumErrores ++;
	}
    

    if(acumErrores > 0){
		return false;
    }else if (acumErrores === 0){
		return alert((`Hemos encontrado la búsqueda de ${input_search.value}!`), input_search.value="") ;
	}
}