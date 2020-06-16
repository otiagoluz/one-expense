import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense/expense.component';
import { PhotoExpenseComponent } from './expense/photo/photoExpense.component';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ExpenseComponent,
    PhotoExpenseComponent,
    NewExpenseComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ExpenseComponent,
    NewExpenseComponent
  ],
})
export class ExpensesModule { }
