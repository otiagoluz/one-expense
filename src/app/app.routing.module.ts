import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login2Component } from './entry/login2/login2.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { SignUpComponent } from './entry/signUp/signUp.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },

  { path: 'login', component: Login2Component },

  { path: 'signUp', component: SignUpComponent },



  { path: 'expenses', component: ExpensesComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
