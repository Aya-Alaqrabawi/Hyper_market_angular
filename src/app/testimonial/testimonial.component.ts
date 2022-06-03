import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateTestimonialComponent } from '../admin/create-testimonial/create-testimonial.component';
import { CreateTestimonialUserComponent } from '../create-testimonial-user/create-testimonial-user.component';
import { HomeService } from '../service/home.service';
import { TestimonialService } from '../service/testimonial.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
    },
    nav: true
  }
  constructor(private dialog: MatDialog, public testimonial: TestimonialService, public home: HomeService) { }
  comment: string = "";
  ngOnInit(): void {
    this.testimonial.getAllUser();
  }
  InputValue(event: any) {
    console.log(event.target.value);
    this.comment = event.target.value;
  }
  customerObj=JSON.parse(localStorage.getItem('user')||'[]');
  customer_role=parseInt(this.customerObj.role);
  openDialog() {
    if(this.customer_role == 2){
    this.dialog.open(CreateTestimonialUserComponent)
    }
    else {
      alert(" Please login ");
    }
  }
  search() {
    const objCourse = {
      comment: this.comment.toString(),
    }
    console.log(objCourse);
    this.home.searchComment(objCourse);
  }
}
