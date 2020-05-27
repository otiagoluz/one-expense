import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signUp/signUp.component';
import { SignUpService } from './signUp/signUp.service';
import { EntryComponent } from './entry.component';
import { EntryRoutingModule } from './entry.routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    EntryComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    EntryRoutingModule
  ],
  providers: [
    SignUpService
  ]
})
export class EntryModule {}