import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  host:string = "http://localhost/BackSymfony/web/api/";
  jwt:string;
  nomUtilisateur:string;
  roles:Array<string>;

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post(this.host+'login', data, {observe:'response'});
  }

  saveToken(jwt:string){
    localStorage.setItem('token', jwt);
    this.jwt=jwt;
    this.parseJWT();
  }

  parseJWT(){

    let jwtHelper = new JwtHelperService();
    let objWT = jwtHelper.decodeToken(this.jwt);
    this.nomUtilisateur = objWT .obj;
    this.roles = objWT .obj;
  }

  isAdmin(){
    return this.roles.indexOf('ADMIN')>=0;
  }

  isUser(){
    return this.roles.indexOf('USER')>=0;
  }

  isAuthenticated(){
    return this.roles && (this.isAdmin() || this.isUser());
  }
}
