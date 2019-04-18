import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { RodapeComponent } from './rodape/rodape.component';

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
    InputComponent
  ],
  exports: [
    MenuComponent,
    RodapeComponent,
    InputComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompartilhadoModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CompartilhadoModule,
    };
  }
}
