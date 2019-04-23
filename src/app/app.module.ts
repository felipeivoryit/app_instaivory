import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompartilhadoModule } from './compartilhado/compartilhado.modulo';
import { LoginComponent } from './seguranca/login/login.component';

import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';

import { NgxSpinnerModule } from 'ngx-spinner';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UsuarioService } from './usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CompartilhadoModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    NgxSpinnerModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
