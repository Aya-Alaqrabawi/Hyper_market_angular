import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CreateTestimonialUserComponent } from '../create-testimonial-user/create-testimonial-user.component';
import { ContactService } from '../service/contact.service';
import { HomeService } from '../service/home.service';
import { HomepageService } from '../service/homepage.service';
import { SliderService } from '../service/slider.service';
import { TestimonialService } from '../service/testimonial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  constructor(private dialog: MatDialog,public homepageService:HomepageService,public sliderService:SliderService,private contactService:ContactService,private toaster:ToastrService , private spinner:NgxSpinnerService, public home:HomeService,public testimonial: TestimonialService) { }
  CreateForm:FormGroup= new FormGroup({
    name :new FormControl(),
    email :new FormControl(),
    subject :new FormControl(),
    message :new FormControl(),
  })
  customerObj=JSON.parse(localStorage.getItem('user')||'[]');
  customer_Id=parseInt(this.customerObj.nameid);
  customer_role=parseInt(this.customerObj.role);
  ngOnInit(): void {
    this.testimonial.getAllUser();
     this.home.getCategoryAndProduct();
     setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    this.sliderService.getAll();
    this.homepageService.getAll();
  }
  openDialog() {
    this.dialog.open(CreateTestimonialUserComponent)
  }
  AddProduct(Id:number){
    if(this.customer_role == 2){
     
          const body={
      customerId:this.customer_Id,
      ProId:Id
    }
   this.home.AddProductCart(body);
  }else{
    alert(" Please login ");
  }
  }

  save(){
    this.contactService.createContact(this.CreateForm.value);
  }
}
