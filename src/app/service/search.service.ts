import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
data:any=[]
  constructor(private spinner:NgxSpinnerService,private http:HttpClient,private toastr:ToastrService) { }


  search(body:any){
    debugger;
    this.http.post('https://localhost:44338/api/Admin/SearchDates',body)
    .subscribe((res:any)=>{
      debugger;
      this.data=res;
      this.toastr.success('Search Successfully :) ')
    },err=>{
      this.toastr.error('something error in Search');
    })
  }

}
