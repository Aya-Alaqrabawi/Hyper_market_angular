import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentCustomer:any;
  currentCustomerObj:any;
selectedProduct:any={};
data:any=[]
display_Image:any;
  constructor(private spinner:NgxSpinnerService,private http:HttpClient,private toaster:ToastrService,public route:Router) { }


submit(username:any,password:any){

  var body={
    UserName:username.value.toString(),
    PassWord:password.value.toString()
  }
  const headerDir={
    'Content-Type':'application/json',
    'Accept':'application/json'
  }
  const requestOptions={
    headers:new HttpHeaders(headerDir)
  }
  this.spinner.show();
  this.http.post('https://localhost:44338/api/Login/SingIn',body,requestOptions).subscribe((res:any)=>{
    this.spinner.hide();
  console.log(res);
  const responce={
    token:res.toString()
  }
  localStorage.setItem('token',responce.token);
  let data:any = jwt_decode(responce.token);
  console.log(data);
  localStorage.setItem('user',JSON.stringify({...data}));

     if(data.role=='2')
     {
       this.route.navigate(['home']);
     }else if(data.role=='1'){
     this.route.navigate(['admin/content']);
     }
},err=>{
    this.spinner.hide();
    this.toaster.error('Unauthorized');
  });
}




  registerUser(data :any){
   
      this.spinner.show();
      //hits api
      data.imageName=this.display_Image;
      // debugger;
      this.http.post('https://localhost:44338/api/User/Register',data).subscribe((res:any)=>{
      //hide spinner
      this.spinner.hide();
      //toaster
      this.toaster.success('Registered')
      }, err=>{ // في حال كان في error
        this.spinner.hide();
        this.toaster.success('Registered');
      })
}

uploadAttachment(file:FormData){

debugger;
this.http.post('https://localhost:44338/api/User/UploadImgCustomer',file).subscribe((res:any)=>{

this.display_Image=res.imageName;  
debugger;  
if(res){
console.log(res)
  }

this.toaster.success("upload image");
},err=>{
  this.toaster.error(" Not upload image");
})
}

}
