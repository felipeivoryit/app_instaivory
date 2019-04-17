import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './seguranca/login/login.component';
import { InputComponent } from './compartilhado/input/input.component';

// Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HomeComponent } from './home/home.component';
//import { MenuComponent } from './menu/menu.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { CompartilhadoModule } from './compartilhado/compartilhado.modulo';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CompartilhadoModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
