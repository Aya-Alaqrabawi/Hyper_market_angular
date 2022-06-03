import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
  constructor(public route:Router) { }
  dateObj:number = Date.now();
  ngOnInit(): void {
  }
  customerObj=JSON.parse(localStorage.getItem('user')||'[]');
  customer_role=parseInt(this.customerObj.role);
  goToCart(){

    if(this.customer_role == 2){

    this.route.navigate(['cart']);

    }

    else{

      alert(" Please login ");

    }

  }

  goToTest(){

    if(this.customer_role == 2){

    this.route.navigate(['test']);

    }

    else{

      alert(" Please login ");

    }

  }


 

}
