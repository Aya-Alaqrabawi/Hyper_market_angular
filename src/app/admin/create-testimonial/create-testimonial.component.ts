import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TestimonialService } from 'src/app/service/testimonial.service';

@Component({
  selector: 'app-create-testimonial',
  templateUrl: './create-testimonial.component.html',
  styleUrls: ['./create-testimonial.component.css']
})
export class CreateTestimonialComponent implements OnInit {

  constructor(private testimonial: TestimonialService) { }
  CreateForm: FormGroup = new FormGroup({
    Comment: new FormControl(),
    CustomerID: new FormControl()
  })
  ngOnInit(): void {
  }
  save() {
    this.testimonial.createTestimonial(this.CreateForm.value);
  }
}
