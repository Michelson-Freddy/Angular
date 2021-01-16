import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthentificationService) { }

  ngOnInit() {
  }

  onSubmit(data){
    this.auth.login(data)
      .subscribe(resp=>{
        console.log(resp);
      }, err=>{

      })
  }

  isAdmin(){
    return this.auth.isAdmin();
  }

  isUser(){
    return this.auth.isUser();
  }

}
