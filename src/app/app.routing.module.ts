import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth/auth.guard';
import { ReportListComponent } from './reports/report-list/report-list.component';
import { ReportDetailComponent } from './reports/report-detail/report-detail.component';
import { PhotoExpenseComponent } from './expenses/expense/photo/photoExpense.component';




const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },

  { path: 'login', loadChildren: () =>
    import('./entry/entry.module')
      .then(h => h.EntryModule)
  },

  { path: 'reports', component: ReportListComponent, canActivate: [AuthGuard] },

  { path: 'report/:id', component: ReportDetailComponent, canActivate: [AuthGuard] },

  { path: 'photo', component: PhotoExpenseComponent, canActivate: [AuthGuard] },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
