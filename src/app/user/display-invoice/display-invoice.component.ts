import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-display-invoice',
  templateUrl: './display-invoice.component.html',
  styleUrls: ['./display-invoice.component.css']
})
export class DisplayInvoiceComponent implements OnInit {

  constructor(public home:HomeService) { }
  customerObj=JSON.parse(localStorage.getItem('user')||'');
  customer_Id=parseInt(this.customerObj.nameid);

  ngOnInit(): void {
    this.home.DisplayInvoice(this.customer_Id)
  }

}
