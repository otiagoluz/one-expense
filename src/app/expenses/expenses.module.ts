import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense/expense.component';
import { PhotoExpenseComponent } from './expense/photo/photoExpense.component';




@NgModule({
  declarations: [
    ExpenseComponent,
    PhotoExpenseComponent, 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExpenseComponent
  ],
})
export class ExpensesModule { }
