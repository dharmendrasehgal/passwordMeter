import { Component } from '@angular/core';

@Component({
	selector: 'password-meter',
	templateUrl: './password-meter.component.html',
	styleUrls: []
})
export class PasswordMeterComponent  { 
	title = 'Password Complexity Meter';
	
	eyeToggle() {
		var eyeView= document.getElementById("eye-view"), inputPassword = document.getElementById("inputPassword");
		eyeView.classList.toggle("glyphicon-eye-close");
		return (inputPassword.getAttribute('type')==="password") ? inputPassword.setAttribute('type','text'): inputPassword.setAttribute('type','password');
	}
	passwordMeter(event: any) {
		var strength = document.getElementById('strength'), inputPassword = (<HTMLInputElement> document.getElementById("inputPassword"));//cast the result of getElementById() to HTMLInputElement
		var strongCase = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*?_~]).*$", "g");
		var mediumCase = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
		var enoughCase = new RegExp("(?=.{6,}).*", "g");
		if(inputPassword.value.length==0){
			strength.innerHTML = '<div class="alert alert-danger"><strong>Type password!</strong></div>';
		}
		else if(enoughCase.test(inputPassword.value) == false){
			strength.innerHTML = '<div class="alert alert-danger"><strong>Please type more character!</div>';
		}
		else if(strongCase.test(inputPassword.value)){
			strength.innerHTML = '<div class="alert alert-success"><strong>Strong!</strong></div>';
		}
		else if(mediumCase.test(inputPassword.value)){
			strength.innerHTML = '<div class="alert alert-success"><strong>Medium!</strong></div>';
		}
		else {
			strength.innerHTML = '<div class="alert alert-warning"><strong>Weak!</strong></div>';
		}
		
	}
}
