
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct:any={};
  data:any=[]
  display_Image:any;
  constructor(private spinner:NgxSpinnerService,private http:HttpClient,private toastr:ToastrService) { }



  getAll(){
    //show spinner
    this.spinner.show();
    //hit api
    this.http.get('https://localhost:44338/api/Admin/Product').subscribe((res)=>{
      this.data=res;
      this.spinner.hide();  
      this.toastr.success('Retrived');
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Something went wrong")
    })
  }



  createProduct(data:any){
    this.spinner.show();
    //hit api
    data.imageName=this.display_Image;
    this.http.post('https://localhost:44338/api/Admin/Product',data).subscribe((res:any)=>{
      this.data=res;
      this.spinner.hide();
      this.toastr.success('Retrived');
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Something went wrong")
    })
  }


  updateProduct(body:any)
  {
    body.imageName=this.display_Image;
    this.http.put('https://localhost:44338/api/Admin/Product',body).subscribe((res:any)=>{
      this.toastr.success('Retrived');
    }, err=>{
      this.toastr.error("Something went wrong")
    })
  } 


  uploadAttachment(file:FormData){
    this.http.post('https://localhost:44338/api/Admin/UploadImgPro/',file).subscribe((res:any)=>{
      if(res)
      console.log(res);
      this.display_Image=res.imageName;
    }, err=>{
      this.toastr.error(err.message)
    })
  }


  delete(id:number){
    this.http.delete('https://localhost:44338/api/Admin/Product/'+id).subscribe((res)=>
    {
      this.toastr.success('Deleted')
    },err=>{
      this.toastr.error('cant delete')
    })
  }

  
}
