
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'

import { Report } from 'src/app/reports/report/report';


const API_URL = 'https://one-expense.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {


  constructor(private http: HttpClient) { }



  listExpenses() {
    return this.http
      .get<Report[]>(API_URL + '/ExpenseReport');
  }


  getRapport(id: string) {
    return this.http
    .get<Report[]>(API_URL + '/ExpenseReport/' + id);
  }






  
  
  
  
  
  // listExpenses2() {
  //   let datain;
  //   const response = this.http.get<Rapport[]>(API_URL + '/ExpenseReport')
  //   .pipe(map(e => e));
  //   response.subscribe(res => {
  //     let p = res.map(e => e.details).map(e => e.map(e => e));
  //     datain = p;
  //       console.table(p);
  //     })

  //     return datain;
  //   }
    
  }
    
