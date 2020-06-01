import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './expenses.component';
import { ExpenseComponent } from './expense/expense.component';




@NgModule({
  declarations: [
    ExpenseComponent, 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExpenseComponent
  ],
})
export class ExpensesModule { }
