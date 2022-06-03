import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AboutService } from 'src/app/service/about.service';
import { CreateAboutComponent } from '../create-about/create-about.component';

@Component({
  selector: 'app-manage-about',
  templateUrl: './manage-about.component.html',
  styleUrls: ['./manage-about.component.css']
})
export class ManageAboutComponent implements OnInit {
  @ViewChild('callUpdateDialog') callUpdateDialog! : TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! : TemplateRef<any>
    aboutarr:any={}
    sum:number=0;
  constructor(private dialog: MatDialog,public about:AboutService) { }

  ngOnInit(): void {
    this.about.getAll();
  }
  openDialog(){
    this.dialog.open(CreateAboutComponent)
  }
  updateForm:FormGroup= new FormGroup({
    aboutId :new FormControl(),
    image :new FormControl(),
    FirstText :new FormControl(),
    SecondText :new FormControl(),

  })
  openUpdateDialog(aboutid:any,img:any,firsttext:any,secondtext:any){
    //console.log(categoryid,categoryname)
    this.aboutarr={
      aboutId:aboutid,
      image:img,
      FirstText:firsttext,
      SecondText:secondtext,

    }
    this.updateForm.controls['aboutId'].setValue(aboutid);
    this.updateForm.controls['image'].setValue(img);
    this.updateForm.controls['FirstText'].setValue(firsttext);
    this.updateForm.controls['SecondText'].setValue(secondtext);
    this.dialog.open(this.callUpdateDialog)
  }
  updateAbout(){
    this.about.updateAbout(this.updateForm.value);
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
    this.about.uploadAttachment(formData);
  }



  openDeleteDialog(categoryid:any){
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!=undefined){
        if(res=='yes')
        this.about.delete(categoryid);
        else if(res=='no')
        console.log("Thank you");
        window.location.reload();
      }
    })
  }

}