import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { RouterModule } from '@angular/router';
import { ExpensesModule } from '../expenses/expenses.module';
import { NewReportComponent } from './new-report/new-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReportComponent, 
    ReportListComponent, 
    ReportDetailComponent, 
    NewReportComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ExpensesModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    ReportListComponent,
    ReportComponent,
  ],
})
export class ReportsModule {}