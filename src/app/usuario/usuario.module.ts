import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CompartilhadoModule } from '../compartilhado/compartilhado.modulo';
import { UsuarioCadastrarComponent } from './usuario-cadastrar/usuario-cadastrar.component';

const ROUTES: Routes = [
    { path: '', component: UsuarioCadastrarComponent }
]

@NgModule({
    declarations: [
        UsuarioCadastrarComponent],
    imports: [CompartilhadoModule, RouterModule.forChild(ROUTES)]
})

export class UsuarioModule{

}