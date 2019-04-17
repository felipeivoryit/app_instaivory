import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $: any

@Component({
  selector: 'app-ivory-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {

  usuarioForm: FormGroup

  constructor(private fb: FormBuilder) { }
  

  ngOnInit() {
    this.usuarioForm = this.fb.group(
      {
        nome: this.fb.control('', Validators.required),
        email: this.fb.control('', [Validators.required, Validators.email]),
        sexo: this.fb.control('', [Validators.required]),
        senha: this.fb.control('', [Validators.required]),
        senhaConfimacao: this.fb.control('', [Validators.required])
        //foto: this.fb.control('', [Validators.required])
      })
  }

  
}
