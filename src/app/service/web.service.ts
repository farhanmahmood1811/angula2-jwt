import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class WebService {
	BASE_URL = "http://localhost:3000/user"

	constructor(private http: Http, private auth: AuthService) {
	}
    
    userDetail = {}
	getUser() {
        this.http.get(this.BASE_URL, this.auth.tokenHeader).subscribe(res => {
            this.userDetail = res.json()
        }, error => {
            console.log(error)
        }) 
    }
    
}
