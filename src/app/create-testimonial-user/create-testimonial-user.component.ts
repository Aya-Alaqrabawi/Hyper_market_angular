import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TestimonialService } from '../service/testimonial.service';

@Component({
  selector: 'app-create-testimonial-user',
  templateUrl: './create-testimonial-user.component.html',
  styleUrls: ['./create-testimonial-user.component.css']
})
export class CreateTestimonialUserComponent implements OnInit {
  customerObj=JSON.parse(localStorage.getItem('user')||'');
  customerid=parseInt(this.customerObj.nameid);
  constructor(private testimonial: TestimonialService) { }
  CreateForm: FormGroup = new FormGroup({
    Comment: new FormControl(),
    CustomerID: new FormControl( this.customerid),
  })
  ngOnInit(): void {
  }
  save() {
    this.testimonial.createTestimonial(this.CreateForm.value);
  }
}
