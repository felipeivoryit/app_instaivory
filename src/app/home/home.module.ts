import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home.component'
import { CompartilhadoModule } from '../compartilhado/compartilhado.modulo';

const ROUTES: Routes = [
    { path: '', component: HomeComponent }
]

@NgModule({
    declarations: [
        HomeComponent],
    imports: [CompartilhadoModule, RouterModule.forChild(ROUTES)]
})

export class HomeModule{

}