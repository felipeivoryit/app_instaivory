import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './seguranca/login/login.component';

export const ROUTES: Routes = [

  {path: '', component: LoginComponent},
  
  /********************  HOME LISTA POSTAGEM  *******************/
  {path: 'home', loadChildren: './home/home.module#HomeModule'},

  /********************       USUÁRIO       *********************/
  {path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioModule'}
]