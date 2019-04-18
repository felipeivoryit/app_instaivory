import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './seguranca/login/login.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { CompartilhadoModule } from './compartilhado/compartilhado.modulo';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CompartilhadoModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
