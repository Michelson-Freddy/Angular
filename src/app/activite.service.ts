import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  readonly rootURL = "http://localhost/BackSymfony/web/api/";

  constructor(private http:HttpClient) { }

  getAllActivity(){
    return this.http.get(this.rootURL+'activite');
  }
}
