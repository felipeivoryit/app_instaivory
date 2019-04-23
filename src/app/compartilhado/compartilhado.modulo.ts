import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { RodapeComponent } from './rodape/rodape.component';
import { MapaComponent } from './mapa/mapa.component';
import { UsuarioService } from '../usuario/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    MenuComponent,
    RodapeComponent,
    InputComponent,
    MapaComponent
  ],
  exports: [
    // Component
    MenuComponent,
    RodapeComponent,
    InputComponent,
    MapaComponent,
    // Module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CompartilhadoModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CompartilhadoModule,
    };
  }
}
