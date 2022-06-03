import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdmincrtService } from 'src/app/service/admincrt.service';
import { CreateAdminsComponent } from '../create-admins/create-admins.component';

@Component({
  selector: 'app-manage-admins',
  templateUrl: './manage-admins.component.html',
  styleUrls: ['./manage-admins.component.css']
})
export class ManageAdminsComponent implements OnInit {
  @ViewChild('callDeleteDialog') callDeleteDialog! : TemplateRef<any>
  data:any={}
  constructor(private dialog: MatDialog,public adminservice: AdmincrtService) { }

  ngOnInit(): void {
    this.adminservice.getAll();
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

  openDialog(){
    this.dialog.open(CreateAdminsComponent)
  }

  openDeleteDialog(adminId:any){
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!=undefined){
        if(res=='yes')
        this.adminservice.delete(adminId);
        else if(res=='no')
        console.log("Thank you");
        window.location.reload();
      }
    })
  }
}
