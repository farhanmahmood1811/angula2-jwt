import { Component, ViewChild } from '@angular/core';
// Used for getting route details
import { ActivatedRoute } from '@angular/router'; 
import { AuthService } from '../service/auth.service';
import { WebService } from '../service/web.service';

@Component({
  selector: 'home',
  template: `
    <h1 *ngIf="auth.isAuthenticated"> Welocme {{auth.name}} </h1>
    <span *ngIf="web.userDetail.username"> Username: {{web.userDetail.username}}</span>
    <h1 *ngIf="!auth.isAuthenticated"> Welocme, Login To Continue </h1>
  `,
  styleUrls: ['../app.component.css']
})

export class HomeComponent {
    constructor(private route: ActivatedRoute, private auth: AuthService, private web: WebService) {}
    
    ngOnInit() {
      if(this.auth.isAuthenticated) {
       this.web.getUser();
      }
    }
}
