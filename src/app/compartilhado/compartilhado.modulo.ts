import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule, ROUTES, PreloadAllModules } from '@angular/router';
@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule,
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
