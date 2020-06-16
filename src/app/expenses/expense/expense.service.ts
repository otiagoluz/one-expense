
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Expense } from './expense';
import { AuthService } from 'src/app/core/auth/auth.service';


const API_URL = 'https://one-expense.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  addExpense(id: string, expense: Expense) {
    expense.expenseId = id;
    console.log(expense);
    return this.http.post<Expense>(
      API_URL + '/ExpenseReportDetail', expense, 
      { headers: this.authService.authHeader() }
    )
  }


} 
    

 