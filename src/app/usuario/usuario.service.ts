import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {

  private apiRoot = 'http://localhost:8000/'

  // CONFIGURAÇÃO ACESSO A REDE
  // DESCOBRINDO O ENDEREÇO DA MÁQUINA
  // ip addr

  //private apiRoot = 'http://192.168.1.193:8000/'

  constructor(private http: HttpClient) { }


  getInstaivoryUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiRoot.concat('instaivory-usuario/'))
  }

  createInstaivoryUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(
      this.apiRoot.concat('instaivory-usuario/'), usuario
    )
  }

}