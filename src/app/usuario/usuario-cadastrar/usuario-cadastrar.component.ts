import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

declare var $: any

@Component({
  selector: 'app-ivory-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {

  usuarioForm: FormGroup
  file: File
  preview: string
  jsonData: any;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) { }
  

  ngOnInit() {
    this.usuarioForm = this.fb.group(
      {
        nome: this.fb.control('', Validators.required),
        email: this.fb.control('', [Validators.required, Validators.email]),
        sexo: this.fb.control('', [Validators.required]),
        senha: this.fb.control('', [Validators.required]),
        senhaConfirmacao: this.fb.control('', [Validators.required]),
        foto: null,
      })

  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        this.usuarioForm.get('foto').setValue(
          <string>reader.result
        ),
        this.preview = event.target.result
      };
    }
  }
  

  clearFile() {
    this.usuarioForm.get('foto').setValue(null);
    this.fileInput.nativeElement.value = '';
    this.preview = '';
  }

  salvar(usuario: Usuario){

    this.usuarioService.createInstaivoryUsuario(usuario)
                        .subscribe(
                          result => {
                            this.jsonData= result; 
                            console.log("Success : "+ this.jsonData); 
                          },
                          error => {
                            console.log(`Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`);
                        }
                        )
                        
  }

  
}
