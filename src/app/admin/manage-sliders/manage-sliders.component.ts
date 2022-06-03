import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SliderService } from 'src/app/service/slider.service';
import { CreateSliderComponent } from '../create-slider/create-slider.component';

@Component({
  selector: 'app-manage-sliders',
  templateUrl: './manage-sliders.component.html',
  styleUrls: ['./manage-sliders.component.css']
})
export class ManageSlidersComponent implements OnInit {
  @ViewChild('callUpdateDialog') callUpdateDialog! : TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! : TemplateRef<any>
  constructor(private dialog: MatDialog,public sliderService:SliderService) { }
  product:any={}
  ngOnInit(): void {
    this.sliderService.getAll();
  }
  openDialog(){
    this.dialog.open(CreateSliderComponent)
  }
  updateForm:FormGroup= new FormGroup({
    sliderId :new FormControl(),
    image :new FormControl(),

  })
  openUpdateDialog(slidid:any,img:any){
    //console.log(categoryid,categoryname)
    this.product={
      sliderId:slidid,
      image:img,
    }
    this.updateForm.controls['sliderId'].setValue(slidid);
    this.updateForm.controls['image'].setValue(img);
    this.dialog.open(this.callUpdateDialog)
    
  }
  updateCategory(){
    this.sliderService.updateSlider(this.updateForm.value);
    window.location.reload();
  }




  openDeleteDialog(sliderId:any){
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!=undefined){
        if(res=='yes')
        this.sliderService.delete(sliderId);
        else if(res=='no')
        console.log("Thank you");
        window.location.reload();
      }
    })
  }
  uploadFile(file:any){
    if(file.length==0){
      return;
    }
    let fileUpload=<File>file[0];
    //file[0]:'angular.jpg'
    const formData = new FormData
    formData.append('file',fileUpload,fileUpload.name);
    this.sliderService.uploadAttachment(formData);
  }

}
