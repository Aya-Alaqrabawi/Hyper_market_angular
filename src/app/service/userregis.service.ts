import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserregisService {
  selectedProduct:any={};
  data:any=[]
  ddata:any=[]
  dddata:any=[]
  ddddata:any=[]
  arr:any=[]
  arrr:any=[]
  arrrr:any=[]
  Number:number | undefined
  display_Image:any;
  
  constructor(private spinner:NgxSpinnerService,private http:HttpClient,private toastr:ToastrService) { }

  getUserRegis(){
    //show spinner
    this.spinner.show();
    //hit api
    this.http.get('https://localhost:44338/api/Admin/NumberOfCustomers').subscribe((res)=>{
      this.data=res;
      this.spinner.hide();  
      this.toastr.success('Retrived');
      this.Number = this.data[0].numOfCus;
      
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Something went wrong")
    })
  }


  getAnuualSum(){
    //show spinner
    this.spinner.show();
    //hit api
    this.http.get('https://localhost:44338/api/Admin/AnuualReportSum').subscribe((res)=>{
      this.ddata=res;
    }, err=>{
    })
  }
  getAnuualCount(){
    //show spinner
    this.spinner.show();
    //hit api
    this.http.get('https://localhost:44338/api/Admin/AnuualReportCount').subscribe((res)=>{
      this.ddddata=res;
    }, err=>{
    })
  }
  getAllAnuualReport(){
    //show spinner
    this.spinner.show();
    //hit api
    this.http.get('https://localhost:44338/api/Admin/AnuualReport').subscribe((res)=>{
      this.dddata=res;
      this.spinner.hide();
      this.toastr.success('Retrived');
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Something went wrong")
    })
  }


  getMonthlySum(){
    //show spinner
    this.spinner.show();
    //hit api
    this.http.get('https://localhost:44338/api/Admin/MonthlyReportSum').subscribe((res)=>{
      this.arrrr=res;
    }, err=>{
    })
  }
  getMonthlyCount(){
    //show spinner
    this.spinner.show();
    //hit api
    this.http.get('https://localhost:44338/api/Admin/MonthlyReportCount').subscribe((res)=>{
      this.arrr=res;
    }, err=>{
    })
  }
  getAllMonthlyReport(){
    //show spinner
    this.spinner.show();
    //hit api
    this.http.get('https://localhost:44338/api/Admin/MonthlyReport').subscribe((res)=>{
      this.arr=res;
      this.spinner.hide();
      this.toastr.success('Retrived');
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Something went wrong")
    })
  }

  getNumber()
  {
    
    return this.data[0].numOfCus;
  }
}
