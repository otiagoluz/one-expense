
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from './report';
import { AuthService } from 'src/app/core/auth/auth.service';
import { NewReport } from './newReport';


const API_URL = 'https://one-expense.azurewebsites.net/api';


@Injectable({
  providedIn: 'root'
})
export class ReportService {
  
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
  
  
  getReports() {
    return this.http.get<Report[]>(
      API_URL + '/ExpenseReport', 
      { headers: this.authService.authHeader() }
    )
  }

  getReportDetail(id: string) {
    return this.http.get<Report>(
      API_URL + '/ExpenseReport/' + id, 
      { headers: this.authService.authHeader() } 
    )
  }

  addReport(report: NewReport) {
    console.log(report);
    return this.http.post<NewReport>(
      API_URL + '/ExpenseReport', report, 
      { headers: this.authService.authHeader() }
    )
  }


}
