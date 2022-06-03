import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-update-profile',
  templateUrl: './view-update-profile.component.html',
  styleUrls: ['./view-update-profile.component.css']
})
export class ViewUpdateProfileComponent implements OnInit {

  customerObj=JSON.parse(localStorage.getItem('user')||'');
  customerid=parseInt(this.customerObj.nameid);
 

  unique_name=this.customerObj.unique_name;
  
  customer:any={}  

  updateForm:FormGroup=new FormGroup({
    cusID:new FormControl(),
    imageName:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    Organization:new FormControl({value: 'Tahaluf Al-Emarat', disabled: true}),
    Location:new FormControl({value: 'United Arab Emirates, Abu Dhabi', disabled: true})
  })
  constructor(public user:UserService) { }

  ngOnInit(): void {

   
    this.user.getCustomerById( this.customerid)

    console.log(typeof(this.customerid));
    
    this.user.getCustomerById(this.customerid)
  }

  
  uploadFile(file:any){
    if(file.length===0){
      return ;

    }
    let fileUpload=<File>file[0];
    const fromData=new FormData();
    fromData.append('file',fileUpload,fileUpload.name);
    this.user.uploadAttachment(fromData);
    
  }
  
  
  updateProfile()
  {
    this.updateForm.controls['cusID'].setValue(this.customerid); 
    this.user.updateCustomer(this.updateForm.value);    
  }
   

}
