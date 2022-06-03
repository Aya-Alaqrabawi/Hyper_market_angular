import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  constructor(private productService:ProductService) { }
  CreateForm:FormGroup= new FormGroup({
    proName :new FormControl('',Validators.required),
    proPrice :new FormControl(),
    imageName :new FormControl('',Validators.required),
    categoryID :new FormControl(),
  })
  ngOnInit(): void {
  }
  save(){
    this.productService.data.categoryID=parseInt(this.CreateForm.controls['categoryID'].value)
    this.productService.data.proPrice=parseInt(this.CreateForm.controls['proPrice'].value)
    console.log(this.productService.data.categoryID)
    console.log(this.productService.data.proPrice)
    console.log(this.productService.data.proName)
    console.log(this.productService.data.proID)
    console.log(this.productService.data.barCode)
    this.productService.createProduct(this.CreateForm.value);
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
    this.productService.uploadAttachment(formData);
  }
}
