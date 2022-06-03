import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TestimonialService } from 'src/app/service/testimonial.service';
import { CreateTestimonialComponent } from '../create-testimonial/create-testimonial.component';

@Component({
  selector: 'app-manage-testimonials',
  templateUrl: './manage-testimonials.component.html',
  styleUrls: ['./manage-testimonials.component.css']
})
export class ManageTestimonialsComponent implements OnInit {
  @ViewChild('callUpdateDialog') callUpdateDialog! : TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! : TemplateRef<any>
  constructor(private dialog: MatDialog,public testimonial:TestimonialService) { }
test:any=[]
  ngOnInit(): void {
    this.testimonial.getAll();
  }
  openDialog(){
    this.dialog.open(CreateTestimonialComponent)
  }
  updateForm:FormGroup= new FormGroup({
    ID :new FormControl(),
    Comment :new FormControl(),
    CustomerID:new FormControl(),
    Status :new FormControl()
  })
  openUpdateDialog(slidid:any,img:any,ss:any,st:any){
    //console.log(categoryid,categoryname)
    this.test={
      ID:slidid,
      Comment:img,
      CustomerID:ss,
      Status:st
    }
    this.updateForm.controls['ID'].setValue(slidid);
    this.updateForm.controls['Comment'].setValue(img);
    this.updateForm.controls['CustomerID'].setValue(ss);
    this.updateForm.controls['Status'].setValue(st);
    this.dialog.open(this.callUpdateDialog)
    
  }
  updateCategory(){
    this.testimonial.updateTestimonial(this.updateForm.value);
    window.location.reload()
  }




  openDeleteDialog(testid:any){
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!=undefined){
        if(res=='yes')  
        this.testimonial.delete(testid);
        else if(res=='no')
        console.log("Thank you");
        window.location.reload()
      }
    })
  }
}
