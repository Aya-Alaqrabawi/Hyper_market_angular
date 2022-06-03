import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ViewregisService {
 data:any=[]
  constructor(private spinner:NgxSpinnerService,private http:HttpClient,private toastr:ToastrService) { }

  ViewUserRegisteredDetails()
  {
     //show spinner
     this.spinner.show();
     //hit api
     this.http.get('https://localhost:44338/api/Admin/ViewUserRegisteredDetails').subscribe((res)=>{
       this.data=res;
       this.spinner.hide();  
       this.toastr.success('Retrived');
     }, err=>{
       this.spinner.hide()
       this.toastr.error("Something went wrong")
     })
  }
}
