import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Login2Component } from './login2/login2.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signUp/signUp.component';
import { SignUpService } from './signUp/signUp.service';

@NgModule({
  declarations: [
    Login2Component,
    SignUpComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    SignUpService
  ]
})
export class EntryModule {}