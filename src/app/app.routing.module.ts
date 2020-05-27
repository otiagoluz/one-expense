import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesComponent } from './expenses/expenses.component';
import { AuthGuard } from './core/auth/auth.guard';



const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },

  { path: 'login', loadChildren: () =>
    import('./entry/entry.module')
      .then(h => h.EntryModule)
  },

  { path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
