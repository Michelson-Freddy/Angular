import { Component } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Client';
  
  constructor(private auth:AuthentificationService) { }

  isAdmin(){
    return this.auth.isAdmin();
  }

  isUser(){
    return this.auth.isUser();
  }

  isAuthenticated(){
    return this.auth.isAuthenticated();
  }
}
