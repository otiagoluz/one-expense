import { Report } from './../report/report';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report/report.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'oe-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {

  reports$: Observable<Report[]>;

  id:string;

  constructor(
    private reportService: ReportService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.reports$ = this.reportService.getReports();
  }

}
