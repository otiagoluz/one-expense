import { SignUpService } from './signUp.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sameValidator } from 'src/app/shared/validators/sameValidator';
import { NewUser } from './new-user';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss'],
})
export class SignUpComponent implements OnInit, AfterViewInit {
  
  signUpForm: FormGroup;
  @ViewChild('emailInput') emailInput:ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(18),
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{6,32}$')
      ]],
        confirmPass: ['', [
          Validators.required
        // sameValidator
      ]]
    });
  }

  ngAfterViewInit(): void {
    this.emailInput.nativeElement.focus();
  }

  signup() {
    const newUser = this.signUpForm.getRawValue() as NewUser;
    this.signUpService
      .signup(newUser)
      .subscribe(() => 
        this.router.navigate(['']),
        err => console.log(err));
  }

}

