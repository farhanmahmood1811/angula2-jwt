import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: "register",
	templateUrl: "../template/register.component.html"
})

export class RegisterComponent {

	form;

	constructor(private authService: AuthService, private fb: FormBuilder) {
		this.form = fb.group({
			name: ["", Validators.required],
			username: ["", Validators.required],
			password: ["", Validators.required]
		})
	}
	
	onSubmit() {
		this.authService.register(this.form.value);
	}
}

