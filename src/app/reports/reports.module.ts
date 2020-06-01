import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { RouterModule } from '@angular/router';
import { ExpensesModule } from '../expenses/expenses.module';

@NgModule({
  declarations: [
    ReportComponent, 
    ReportListComponent, 
    ReportDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ExpensesModule

  ],
  exports: [
    ReportListComponent,
    ReportComponent,
  ],
})
export class ReportsModule {}