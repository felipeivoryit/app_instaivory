import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';


@Component({
  selector: 'app-ivory-usuario-buscar',
  templateUrl: './usuario-buscar.component.html',
  styleUrls: ['./usuario-buscar.component.css']
})
export class UsuarioBuscarComponent implements OnInit {

  usuarios: Usuario[]

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getInstaivoryUsuarios().subscribe(
      (usuarios: Usuario[]) => this.usuarios = usuarios,
      error => {
        console.log(`Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`);
      }

    )
    
  }

}
