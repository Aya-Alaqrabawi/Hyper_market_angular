import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {

  constructor(private roter:Router) { }

  ngOnInit(): void {
  }
  GotoAnuualReports(){
    this.roter.navigate(['admin/AnuualRep'])
  }
  GotoMonthlyReports(){
    this.roter.navigate(['admin/MonthlyRep'])
  }
}