import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  private apiRoot = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }


  getInstaivoryUsuarios() {
    return this.http.get(this.apiRoot.concat('instaivory-usuario/'));
  }
}