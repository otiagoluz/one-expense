import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'oe-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @Input() title: string;
  @Input() value: number;


  constructor() { }

  ngOnInit(): void {
  }
}
