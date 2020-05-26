import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signUp/signUp.component';
import { SignUpService } from './signUp/signUp.service';

@NgModule({
  declarations: [
    LoginComponent,
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