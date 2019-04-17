import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [MenuComponent, InputComponent],
  exports: [MenuComponent, InputComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class CompartilhadoModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CompartilhadoModule,
    };
  }
}
