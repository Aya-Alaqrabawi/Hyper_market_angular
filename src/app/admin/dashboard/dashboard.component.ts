import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
   
  }
  goTocategory(){
this.route.navigate(['admin/manage']);
  }
  clear(){
    localStorage.clear();
    this.route.navigate(['auth/login']);
  }
  goToproduct()
  {
    this.route.navigate(['admin/manageproduct']);
  }
  goToUserRegis()
  {
    this.route.navigate(['admin/UserRegis'])
  }
  goToViewUserRegis(){
    this.route.navigate(['admin/ViewUserRegis'])
  }
  goToMonthly()
  {
    this.route.navigate(['admin/MonthlyRep'])
  }
  goToAnuual(){
    this.route.navigate(['admin/AnuualRep'])
  }
  goToProfile(){
    this.route.navigate(['admin/Profile'])
  }
  goTosearch(){
    this.route.navigate(['admin/search'])
  }
  goToViewReports(){
    this.route.navigate(['admin/ViewReports'])
  }
  goToPages(){
    this.route.navigate(['admin/managePages'])
  }
}
//