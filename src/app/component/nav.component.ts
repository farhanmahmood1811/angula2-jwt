import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
	selector: "nav",
	templateUrl: "../template/nav.component.html"
})

export class NavComponent {
    constructor(private auth: AuthService) {}
}

