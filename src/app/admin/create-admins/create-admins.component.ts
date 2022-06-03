import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdmincrtService } from 'src/app/service/admincrt.service';

@Component({
  selector: 'app-create-admins',
  templateUrl: './create-admins.component.html',
  styleUrls: ['./create-admins.component.css']
})
export class CreateAdminsComponent implements OnInit {

  constructor(private adminservice: AdmincrtService) { }
  CreateForm:FormGroup= new FormGroup({
    firstName :new FormControl(),
    lastName :new FormControl(),
    mail :new FormControl(),
    image :new FormControl(),
  })
  ngOnInit(): void {
  }
  save(){

    this.adminservice.createAdmin(this.CreateForm.value);
    window.location.reload();
  }
  uploadFile(file:any){
    if(file.length==0){
      return;
    }
    let fileUpload=<File>file[0];
    //file[0]:'angular.jpg'
    const formData = new FormData
    formData.append('file',fileUpload,fileUpload.name);
    this.adminservice.uploadAttachment(formData);
  }
}
