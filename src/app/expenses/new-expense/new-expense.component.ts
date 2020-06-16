import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Expense } from '../expense/expense';
import { ExpenseService } from '../expense/expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'op-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.scss']
})
export class NewExpenseComponent implements OnInit {
  
  @Input() id: string;
  newExpenseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private expenseService: ExpenseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newExpenseForm = this.formBuilder.group({
      description:['', [
        Validators.required,
        Validators.maxLength(18),
      ]],
      supplier:['', [
        Validators.required,
        Validators.maxLength(18)
      ]],
      amount:['', [
        Validators.required,
        Validators.maxLength(18)
      ]],
      imageUpload:['']
    })
  }

  creteExpense() {
    const newExpense = this.newExpenseForm.getRawValue() as Expense;
    this.expenseService
      .addExpense(this.id, newExpense)
      .subscribe(() => this.router.navigate(['/reports']),
      err => console.log(err)
      );
  }


}
