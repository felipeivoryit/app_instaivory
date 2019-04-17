import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './seguranca/login/login.component';

export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioModule'}
  //{path: 'home', component: HomeComponent}
]