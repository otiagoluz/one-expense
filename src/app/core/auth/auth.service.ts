import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map } from 'rxjs/operators'
import { UserService } from '../user/user.service';
import * as jwt_decode from 'jwt-decode';
import { User } from '../user/user';


const API_URL = 'https://one-expense.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    ) { }

  authenticate(email: string, password: string) {

    
    return this.http
      .post(API_URL + '/Auth/Login', { email, password }, { observe: 'response'})
      .pipe(tap(res => {
        const authToken: string = res.body["accessToken"];
        this.userService.setToken(authToken);
      }))
  }
}