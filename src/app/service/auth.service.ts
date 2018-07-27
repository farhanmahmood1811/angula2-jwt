import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
	BASE_URL = "http://localhost:3000/auth"
    TOKEN_KEY = "token"
    NAME_KEY = "name"

	constructor(private http: Http, private router: Router, private sb: MatSnackBar) {
	}
	
	register(user) {
		this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
            var authResponse = res.json();
            this.router.navigate(['/login'])
        }, error => {
            this.sb.open(error.statusText, "close", {duration: 5000});
        });
    }
    
    login(user) {
        this.http.post(this.BASE_URL + '/login', user).subscribe(res => {
            var loginResponse = res.json();
            localStorage.setItem(this.TOKEN_KEY, loginResponse.token);
            localStorage.setItem(this.NAME_KEY, loginResponse.name);
            this.router.navigate(['/'])
        }, error => {
    		this.sb.open(error.statusText, "close", {duration: 2000});
        })
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.NAME_KEY);
        this.router.navigate(['/login']);
    }

    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }
    
    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    get tokenHeader() {
        let header = new Headers({'Authorization': 'Bearer '+localStorage.getItem(this.TOKEN_KEY)})
        return new RequestOptions({headers: header});
    } 

	private handleError(error) {
		this.sb.open(error, "close", {duration: 2000});
	}
}
