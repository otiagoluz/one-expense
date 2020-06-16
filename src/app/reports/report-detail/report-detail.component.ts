import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report/report.service';
import { ActivatedRoute } from '@angular/router';
import { Expense } from 'src/app/expenses/expense/expense';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss']
})
export class ReportDetailComponent implements OnInit {

  expenses$: Observable<Expense[]>;
  id: string;
  createExpense: boolean = false;

  constructor(
    private reportService: ReportService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(parms => {
      this.id = parms.id });
    this.expenses$ = this.reportService.getReportDetail(this.id)
      .pipe(map(expense => expense.details));
  }


  showCreate() {
    this.createExpense = true;
  }

}
