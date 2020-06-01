import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from './report';


const API_URL = 'https://one-expense.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getReports() {
    return this.http.get<Report[]>(API_URL + '/ExpenseReport')
  }

  getReportDetail(id: string) {
    return this.http.get<Report>(API_URL + '/ExpenseReport/' + id)
  }
}
