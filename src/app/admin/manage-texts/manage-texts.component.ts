import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomepageService } from 'src/app/service/homepage.service';
import { CreateHomeComponent } from '../create-home/create-home.component';

@Component({
  selector: 'app-manage-texts',
  templateUrl: './manage-texts.component.html',
  styleUrls: ['./manage-texts.component.css']
})
export class ManageTextsComponent implements OnInit {
  @ViewChild('callUpdateDialog') callUpdateDialog! : TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! : TemplateRef<any>
  constructor(private dialog: MatDialog,public homepageService:HomepageService) { }
home:any=[]
  ngOnInit(): void {
    this.homepageService.getAll();
  }
  openDialog(){
    this.dialog.open(CreateHomeComponent)
  }
  updateForm:FormGroup= new FormGroup({
    HomeId :new FormControl(),
    FirstText :new FormControl(),
  })
  openUpdateDialog(hid:any,ft:any){
    //console.log(categoryid,categoryname)
    this.home={
      HomeId:hid,
      FirstText:ft,
    }
    this.updateForm.controls['HomeId'].setValue(hid);
    this.updateForm.controls['FirstText'].setValue(ft);
    this.dialog.open(this.callUpdateDialog)
  }
  updateCategory(){
    this.homepageService.updateHome(this.updateForm.value);
    window.location.reload();
  }
  openDeleteDialog(homeid:any){
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!=undefined){
        if(res=='yes')
        this.homepageService.delete(homeid);
        else if(res=='no')
        console.log("Thank you");
        window.location.reload();
      }
    })
  }
}
