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
  error: any

  constructor(private UsuarioService: UsuarioService) { }

  ngOnInit() {
    this.UsuarioService.getInstaivoryUsuarios().subscribe(
      (usuarios: Usuario[]) => this.usuarios = usuarios,
      (error: any) => this.error = error,
      () => {
        console.log(this.usuarios)
      }
    )
    
  }

}
