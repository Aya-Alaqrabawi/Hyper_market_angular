import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/service/product.service';
import { CreateProductsComponent } from '../create-products/create-products.component';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
@ViewChild('callUpdateDialog') callUpdateDialog! : TemplateRef<any>
@ViewChild('callDeleteDialog') callDeleteDialog! : TemplateRef<any>
  product:any={}
  sum:number=0;
  constructor(private dialog: MatDialog,public productService:ProductService ) { }

  ngOnInit(): void {
    this.productService.getAll();
  }
  openDialog(){
    this.dialog.open(CreateProductsComponent)
  }
  updateForm:FormGroup= new FormGroup({
    proID :new FormControl(),
    proName :new FormControl(),
    sale: new FormControl(),
    proPrice :new FormControl(),
    categoryID :new FormControl(),
    barCode:new FormControl(),
    imageName :new FormControl(),

  })
  openUpdateDialog(proid:any,proname:any,Sale:any,proprice:any,categoryid:any,barcode:any,imagename:any){
    //console.log(categoryid,categoryname)
    this.product={
      proID:proid,
      proName:proname,
      sale:Sale,
      proPrice:proprice,
      categoryID:categoryid,
       barCode:barcode,
      imageName:imagename,
    }
    this.updateForm.controls['proID'].setValue(proid);
    this.updateForm.controls['proName'].setValue(proname);
    this.updateForm.controls['sale'].setValue(Sale);
    this.updateForm.controls['proPrice'].setValue(proprice);
    this.updateForm.controls['categoryID'].setValue(categoryid);
    this.updateForm.controls['barCode'].setValue(barcode);
    this.updateForm.controls['imageName'].setValue(imagename);
    this.dialog.open(this.callUpdateDialog)
  }
  updateCategory(){
    this.productService.updateProduct(this.updateForm.value);
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



  openDeleteDialog(categoryid:any){
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!=undefined){
        if(res=='yes')
        this.productService.delete(categoryid);
        else if(res=='no')
        console.log("Thank you");
        window.location.reload();
      }
    })
  }
  
}
