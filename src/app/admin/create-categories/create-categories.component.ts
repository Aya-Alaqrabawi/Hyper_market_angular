import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/service/home.service';
@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.css']
})
export class CreateCategoriesComponent implements OnInit {

  constructor(private homeService:HomeService) { }
  CreateForm:FormGroup= new FormGroup({
    categoryID :new FormControl(),
    catName :new FormControl('',Validators.required),
    imageName :new FormControl(),
  })
  ngOnInit(): void {
  }
  save(){
    console.log(this.homeService.data.categoryID)
    console.log(this.homeService.data.catName)
    console.log(this.homeService.data.imageName)
    this.homeService.createCategory(this.CreateForm.value);
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
}
