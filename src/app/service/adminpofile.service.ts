import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminprofileService {

  dataprof:any=[{}]
  display_Image:any;
  selectedadmin:any={};
  constructor(private spinner:NgxSpinnerService,private http:HttpClient,
  private toaster:ToastrService,public route:Router,public authServ:AuthService) {

   }


   uploadAttachment(file:FormData)
   {

     this.http.post('https://localhost:44338/api/Admin/UploadImageAdmin/',file)
     .subscribe((res:any)=>{
       if(res)
       console.log(res);
       this.display_Image=res.imageName;
     },err=>{
       this.toaster.error(err.message , err.status);
     })

   }

   getAdminById(id:number){
    //show spinner
    this.spinner.show();
    //hits api

    this.http.get('https://localhost:44338/api/Admin/ViewAdminProfile/'+id).subscribe((res)=>{
      this.selectedadmin= res;
      console.log(res);



      this.spinner.hide();
      this.toaster.success('Data Retieved from view profile !!')
    }, err=>{
      //hide spinner
      this.spinner.hide();
       //Toastr
       this.toaster.error('something error ');

    })
     }


  updateAdmin(primarysid:any){
    primarysid.imageName=this.display_Image;
    console.log('primarysid '+primarysid);

    this.http.put('https://localhost:44338/api/Admin/UpdateViewAdminProfile',primarysid).subscribe((res)=>{
      console.log('inside update : '+JSON.stringify(res) );

      this.toaster.success('Updated Successfully :) ')
    },err=>{
      this.toaster.error('something error ');
    })
    window.location.reload();


  }

  // sreach(code:any){
  //   console.log("inside servise "+code);

  //   this.http.get('https://localhost:44338/api/User/searchBarCode/'+code)
  //   .subscribe((res)=>{
  //     console.log(res);
  //     this.dataprof=[res];
  //     console.log("data inside search "+this.dataprof);

  //     this.toaster.success('Search Successfully :) ')
  //   },err=>{
  //     this.toaster.error('something error in Search');
  //   })

  // }












}