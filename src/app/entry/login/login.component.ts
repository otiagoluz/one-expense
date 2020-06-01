import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  @ViewChild('emailInput') emailInput:ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,

  ) { }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  ngAfterViewInit(): void {
    this.emailInput.nativeElement.focus();
  }


  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.authService
      .authenticate(email, password)
      .subscribe(
        () => this.router.navigate(['reports']),
        err => {
          console.log(err);
          this.loginForm.reset();
            this.emailInput.nativeElement.focus();
          alert('Invalid user name or password');
        }
      );
  }
}
