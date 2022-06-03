import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-search-bar-code',
  templateUrl: './search-bar-code.component.html',
  styleUrls: ['./search-bar-code.component.css']
})
export class SearchBarCodeComponent implements OnInit {
  @ViewChild('openCard') openCard! :TemplateRef<any>
  barcode:any='Enter BarCode';
  constructor(private router:Router,public user:UserService,
    private dialog:MatDialog,public home:HomeService) { }

  ngOnInit(): void {
  }
  InputValue(event:any)
  {
    this.barcode=event.target.value;
  
  }
  search()
  {
    console.log(this.barcode);
    this.dialog.open(this.openCard)
    this.user.sreach(this.barcode.toString());
    
  }

  viewCard()
  {
    // this.Batool.emit();
    this.router.navigate(['guest/card']);
  }

  log(user:any)
  {
    console.log("data logged : "+user);

  }
  customerObj=JSON.parse(localStorage.getItem('user')||'[]');

  customer_Id=parseInt(this.customerObj.nameid);

  customer_role=parseInt(this.customerObj.role);
  AddProduct(Id:number){
   var ID=parseInt(Id.toString());
   console.log("data logged : "+ID + typeof(ID));

    if(this.customer_role == 2){
     
          const body={
      customerId:this.customer_Id,
      ProId:ID
    }
   this.home.AddProductCart(body);
  }else{
    alert(" Please login ");
  }
  }
}
