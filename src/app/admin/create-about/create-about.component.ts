import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-create-about',
  templateUrl: './create-about.component.html',
  styleUrls: ['./create-about.component.css']
})
export class CreateAboutComponent implements OnInit {

  constructor(public about:AboutService) { }

  CreateForm:FormGroup= new FormGroup({


    Image :new FormControl(),
    FirstText :new FormControl(),
    SecondText :new FormControl(),

  })
  ngOnInit(): void {
  }
   save(){


           console.log(this.about.data.aboutId)
           console.log(this.about.data.image)
           console.log(this.about.data.ftext)
           console.log(this.about.data.stext)
            this.about.createAbout(this.CreateForm.value);
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
}
