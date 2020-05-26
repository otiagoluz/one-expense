import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';


const API_URL = 'https://one-expense.azurewebsites.net/api';

@Injectable()
export class SignUpService {


  constructor(
    private http: HttpClient
  ) {}

  signup(newUser: NewUser) {
    return this.http.post(API_URL + '/Auth/Create', newUser)    
  } 

}