import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: "login",
	templateUrl: "../template/login.component.html"
})

export class LoginComponent {

	form;

	constructor(private authService: AuthService, private fb: FormBuilder) {
		this.form = fb.group({
			username: ["", Validators.required],
			password: ["", Validators.required]
		})
	}
	
	onSubmit() {
        if(this.form.valid) {
            this.authService.login(this.form.value);
        }
	}
}

