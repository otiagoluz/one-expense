import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { EntryComponent } from './entry.component';
import { SignUpComponent } from './signUp/signUp.component';
import { LoginGuard } from '../core/auth/login.guard';


const routes: Routes = [
  { path: '', component: EntryComponent, canActivate: [LoginGuard],
    children: [
      { path: '', component: LoginComponent },

      { path: 'signUp', component: SignUpComponent }, 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule {}