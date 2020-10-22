const form = document.getElementById('myFormId');

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validar_contrasenya(contrasenya1, contrasenya2) {
    if(contrasenya1 === contrasenya2){
        return true;
    }else{
		return false;
    } 
}

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];

	var inputEmail = document.getElementById('inputEmail');
	
    var inputPassword = document.forms["myForm"]["inputPassword"];
    var inputPassword1 = document.forms["myForm"]["inputPassword1"];
	var inputAddress = document.forms["myForm"]["inputAddress"];
	var inputProvince = document.forms["myForm"]["inputProvince"];
	var inputCity = document.forms["myForm"]["inputCity"];
	var gridCheck = document.forms["myForm"]["gridCheck"];

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Este campo es obligatorio";
		acumErrores ++;
    }
    
    if(inputPassword1.value == "") {
		inputPassword1.classList.add("is-invalid");
		document.getElementById("errorPassword1").textContent = "Este campo es obligatorio";
        acumErrores ++;
    }else if(!validar_contrasenya(inputPassword.value, inputPassword1.value)){
        inputPassword1.classList.add("is-invalid");
		document.getElementById("errorPassword1").textContent = "Las contraseñas escritas no coinciden";
		acumErrores ++;
    }

    if(inputAddress.value == "") {
		inputAddress.classList.add("is-invalid");
		document.getElementById("errorAddress").textContent = "Este campo es obligatorio";
		acumErrores ++;
	}

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
		acumErrores ++;
	}
	
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "Falta la ciutat";
		acumErrores ++;
	}
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Acepta las bases";
		acumErrores ++;
	}

    if(acumErrores > 0){
		return false;
    }else if (acumErrores === 0){
		alert('Your registration was succesfully completed!');
		return true;
	}
}

form.addEventListener('blur', (event) => {
	let contrasenya1 = inputPassword.value;
	let contrasenya2 = inputPassword1.value;

	if(event.target.value ==='') {
		event.target.classList.add('is-invalid');
		if(inputEmail.value == event.target.value) {
			//inputEmail.classList.add("is-invalid");
			document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
		}
		if(inputPassword.value == event.target.value) {
			//inputPassword.classList.add("is-invalid");
			document.getElementById("errorPassword").textContent = "Este campo es obligatorio";
		}
		if(inputPassword1.value == event.target.value) {
			//inputPassword1.classList.add("is-invalid");
			document.getElementById("errorPassword1").textContent = "Este campo es obligatorio";
		}
		if(inputAddress.value == event.target.value) {
			//inputAddress.classList.add("is-invalid");
			document.getElementById("errorAddress").textContent = "Este campo es obligatorio";
		}
		if(inputProvince.value == event.target.value) {
			//inputProvince.classList.add("is-invalid");
			document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
		}
		if(inputCity.value == event.target.value) {
			//inputCity.classList.add("is-invalid");
			document.getElementById("errorCity").textContent = "Falta la ciutat";
		}
		if(event.target.value === contrasenya1 && event.target.value !==''){
			event.target.classList.remove('is-invalid');
		}

	}else if(validar_contrasenya(contrasenya1, contrasenya2) == false){
		if(event.target.value === contrasenya2){
			event.target.classList.add('is-invalid');
			document.getElementById("errorPassword1").textContent = "Las contraseñas escritas no coinciden";
		}
		if(event.target.value === contrasenya1  && event.target.value !==''){
			event.target.classList.remove('is-invalid');
		}
	}else{
		event.target.classList.remove('is-invalid');
	}
}, true);




