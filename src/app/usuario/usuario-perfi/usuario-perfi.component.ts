import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ivory-usuario-perfi',
  templateUrl: './usuario-perfi.component.html',
  styleUrls: ['./usuario-perfi.component.css']
})
export class UsuarioPerfiComponent implements OnInit {

  classModal = 'hidden'

  constructor() { }

  ngOnInit() {
  }

  modal_publicacoes(){
    this.classModal = this.classModal === 'hidden' ? 'visible': 'hidden'
  }

}
