import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from 'src/app/service/contact.service';
import { CreateContactComponent } from '../create-contact/create-contact.component';

@Component({
  selector: 'app-manage-contact',
  templateUrl: './manage-contact.component.html',
  styleUrls: ['./manage-contact.component.css']
})
export class ManageContactComponent implements OnInit {
  @ViewChild('callUpdateDialog') callUpdateDialog! : TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! : TemplateRef<any>
  data:any={}
  constructor(private dialog: MatDialog,public contactService:ContactService) { }

  ngOnInit(): void {
    this.contactService.getAll();
  }
  openDialog(){
    this.dialog.open(CreateContactComponent)
  }
  updateForm:FormGroup= new FormGroup({
    contactID :new FormControl(),
    name :new FormControl(),
    email: new FormControl(),
    subject :new FormControl(),
    message :new FormControl(),

  })
  openUpdateDialog(contactID1:any,name1:any,email1:any,subject1:any,message1:any){
    //console.log(categoryid,categoryname)
    this.data={
      contactID:contactID1,
      name:name1,
      email:email1,
      subject:subject1,
      message:message1,
    }
    this.updateForm.controls['contactID'].setValue(contactID1);
    this.updateForm.controls['name'].setValue(name1);
    this.updateForm.controls['email'].setValue(email1);
    this.updateForm.controls['subject'].setValue(subject1);
    this.updateForm.controls['message'].setValue(message1);
    this.dialog.open(this.callUpdateDialog)
  }
  updateContact(){
    this.contactService.updateContact(this.updateForm.value);
    window.location.reload();
  }
  openDeleteDialog(contactID:any){
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!=undefined){
        if(res=='yes')
        this.contactService.delete(contactID);
        else if(res=='no')
        console.log("Thank you");
        window.location.reload();
      }
    })
  }
}
