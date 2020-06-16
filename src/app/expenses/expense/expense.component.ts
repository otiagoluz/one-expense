import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'oe-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {


  @Input() title: string;
  @Input() value: number;
  @Input() url: string;


  constructor() { }

  ngOnInit(): void {
  }



}
