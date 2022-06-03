import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AboutService {


selectedProduct:any={};
  data:any=[]
  display_Image:any;
  constructor(private spinner:NgxSpinnerService,private http:HttpClient,private toastr:ToastrService) { }



  getAll(){
    //show spinner
    this.spinner.show();
    //hit api
    this.http.get('https://localhost:44338/api/Admin/GetAllAbout').subscribe((res)=>{
      this.data=res;
      this.spinner.hide();
      this.toastr.success('Retrived');
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Something went wrong")
    })
  }



  createAbout(data:any){
    this.spinner.show();
    //hit api
    data.image=this.display_Image;
    this.http.post('https://localhost:44338/api/Admin/CreateAbout',data).subscribe((res:any)=>{
      this.data=res;
      this.spinner.hide();
      this.toastr.success('Retrived');
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Something went wrong")
    })
  }


  updateAbout(body:any)
  {
    body.image=this.display_Image;
    this.http.put('https://localhost:44338/api/Admin/UpdateAbout',body).subscribe((res:any)=>{
      this.toastr.success('Retrived');
    }, err=>{
      this.toastr.error("Something went wrong")
    })
  }


  uploadAttachment(file:FormData){
    this.http.post('https://localhost:44338/api/Admin/UploadImageAbout/',file).subscribe((res:any)=>{
      if(res)
      console.log(res);
      this.display_Image=res.image;
    }, err=>{
      this.toastr.error(err.message)
    })
  }

  delete(id:number){
    this.http.delete('https://localhost:44338/api/Admin/DeleteAbout/'+id).subscribe((res)=>
    {
      this.toastr.success('Deleted')
    },err=>{
      this.toastr.error('cant delete')
    })
  }
}




