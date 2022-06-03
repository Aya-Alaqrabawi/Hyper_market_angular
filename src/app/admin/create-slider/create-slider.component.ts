import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SliderService } from 'src/app/service/slider.service';

@Component({
  selector: 'app-create-slider',
  templateUrl: './create-slider.component.html',
  styleUrls: ['./create-slider.component.css']
})
export class CreateSliderComponent implements OnInit {

  constructor(private sliderService: SliderService) { }
  CreateForm: FormGroup = new FormGroup({
    image: new FormControl()
  })
  ngOnInit(): void {
  }
  save() {
    this.sliderService.createSlider(this.CreateForm.value);
    window.location.reload();
  }
  uploadFile(file: any) {
    if (file.length == 0) {
      return;
    }
    let fileUpload = <File>file[0];
    //file[0]:'angular.jpg'
    const formData = new FormData
    formData.append('file', fileUpload, fileUpload.name);
    this.sliderService.uploadAttachment(formData);
  }
}
