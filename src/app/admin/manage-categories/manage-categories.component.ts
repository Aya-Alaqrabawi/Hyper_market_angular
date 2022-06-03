import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/service/home.service';
import { CreateCategoriesComponent } from '../create-categories/create-categories.component';
@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
@ViewChild('callUpdateDialog') callUpdateDialog! : TemplateRef<any>
@ViewChild('callDeleteDialog') callDeleteDialog! : TemplateRef<any>
  category:any={}
  constructor(private dialog: MatDialog,public homeService:HomeService ) { }

  ngOnInit(): void {
    this.homeService.getAll();
  }
  openDialog(){
    this.dialog.open(CreateCategoriesComponent)
  }
  updateForm:FormGroup= new FormGroup({
    categoryID :new FormControl(),
    catName :new FormControl(),
    imageName :new FormControl(),
  })
  openUpdateDialog(categoryid:any,categoryname:any,imagename:any){
    //console.log(categoryid,categoryname)
    this.category={
      categoryID:categoryid,
      catName:categoryname,
      imageName:imagename
    }
    this.updateForm.controls['categoryID'].setValue(categoryid);
    this.updateForm.controls['catName'].setValue(categoryname);
    this.updateForm.controls['imageName'].setValue(imagename);
    this.dialog.open(this.callUpdateDialog)
  }
  updateCategory(){
    this.homeService.updateCategory(this.updateForm.value);
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
    this.homeService.uploadAttachment(formData);
  }
  openDeleteDialog(categoryid:any){
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!=undefined){
        if(res=='yes')
        this.homeService.delete(categoryid);
        else if(res=='no')
        console.log("Thank you");
        window.location.reload();
      }
    })
  }
} 
