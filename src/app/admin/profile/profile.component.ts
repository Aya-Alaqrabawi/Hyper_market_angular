import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminprofileService } from 'src/app/service/adminpofile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  adminObj=JSON.parse(localStorage.getItem('user')||'');
  primar=parseInt(this.adminObj.primarysid);
  primarr=parseInt(this.adminObj.firstName);


  unique_name=this.adminObj.unique_name;
  adminarr:any={}

  updateForm:FormGroup=new FormGroup({
    adminId:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    image:new FormControl(),
  })
  constructor(public admin:AdminprofileService) { }

  ngOnInit(): void {
    console.log(this.primar);
    console.log(this.primarr);
    this.admin.getAdminById(this.primar)
  }

  uploadFile(file:any){
    if(file.length===0){
      return ;

    }
    let fileUpload=<File>file[0];
    const fromData=new FormData();
    fromData.append('file',fileUpload,fileUpload.name);
    this.admin.uploadAttachment(fromData);

  }

  updateProfile()
  {
    this.updateForm.controls['adminId'].setValue(this.primar);
    this.admin.updateAdmin(this.updateForm.value);
    console.log(this.updateForm.value);

  }
}