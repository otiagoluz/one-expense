import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login2Component } from './login2/login2.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },

  { path: 'login', component: Login2Component },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
