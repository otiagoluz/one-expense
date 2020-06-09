import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report/report.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewReport } from '../report/newReport';
import { Router } from '@angular/router';

@Component({
  selector: 'oe-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent implements OnInit {

  newReportForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private reportService: ReportService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newReportForm = this.formBuilder.group({
      description: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(18),
      ]]
    })
  }

  createReport() {
    const newReport = this.newReportForm.getRawValue() as NewReport;
    this.reportService
      .addReport(newReport)
      .subscribe(() => this.router.navigate(['']), 
      err => console.log(err)
    );
  }

}
