import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CompartilhadoModule } from '../compartilhado/compartilhado.modulo';
import { UsuarioCadastrarComponent } from './usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioPerfiComponent } from './usuario-perfi/usuario-perfi.component';
import { UsuarioBuscarComponent } from './usuario-buscar/usuario-buscar.component';

const ROUTES: Routes = [
    /*********     CADASTRO     **************/
    { path: '', component: UsuarioCadastrarComponent },
    /*********      PERFIL     **************/
    { path: 'perfil', component: UsuarioPerfiComponent },
    /*********      BUSCAR     **************/
    { path: 'buscar', component: UsuarioBuscarComponent }
]

@NgModule({
    declarations: [
        UsuarioCadastrarComponent,
        UsuarioPerfiComponent,
        UsuarioBuscarComponent
    ],
    imports: [CompartilhadoModule, RouterModule.forChild(ROUTES)]
})

export class UsuarioModule{

}