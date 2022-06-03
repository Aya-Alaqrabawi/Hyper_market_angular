import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }


  goToSearchBarCode()
  {
    this.router.navigate(['user/search'])

  }

  goToViewProfile()
  {
    this.router.navigate(['user/viewToUpdate'])
  }

  goToInvoice()
  {
    this.router.navigate(['user/invoice'])
  }

  clear()
  {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
