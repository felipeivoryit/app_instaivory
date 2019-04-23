import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../usuario.model';

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

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder) { }
  

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
        this.usuarioForm.get('foto').setValue({
          filename: file.name,
          filetype: file.type,
          value: (<string>reader.result).split(',')[1]
        }),
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
    console.log(usuario)
  }

  
}
