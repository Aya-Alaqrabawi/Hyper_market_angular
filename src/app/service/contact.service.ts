import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  data:any=[]
  constructor(private spinner:NgxSpinnerService,private http:HttpClient,private toastr:ToastrService) { }
  createContact(data:any){
    this.spinner.show();
    this.http.post('https://localhost:44338/api/Admin/CreateContact',data).subscribe((res:any)=>{
      this.data=res;
      this.spinner.hide();
      this.toastr.success('Contact Form Sent Successfully');
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Something Went Wrong")
    })
  }
  getAll(){
    //show spinner
    this.spinner.show();
    //hit api
    this.http.get('https://localhost:44338/api/Admin/GetAllContact').subscribe((res)=>{
      this.data=res;
      this.spinner.hide();  
      this.toastr.success('Contact Info Retrived');
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Something Went Wrong")
    })
  }
  updateContact(body:any)
  {
    this.http.put('https://localhost:44338/api/Admin/UpdateContact',body).subscribe((res:any)=>{
      this.toastr.success('Updated Contact');
    }, err=>{
      this.toastr.error("Something Went Wrong")
    })
  }
  delete(id:number){
    this.http.delete('https://localhost:44338/api/Admin/DeleteContact/'+id).subscribe((res)=>
    {
      this.toastr.success('Contact Deleted')
    },err=>{
      this.toastr.error(`Can't Delete`)
    })
  }
}
