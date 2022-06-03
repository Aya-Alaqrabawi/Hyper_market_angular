import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { TokenInterceptor } from './Interceptor/token.interceptor';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { GooglePayButtonComponent, GooglePayButtonModule } from '@google-pay/button-angular';
import { CreateTestimonialUserComponent } from './create-testimonial-user/create-testimonial-user.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    TestimonialComponent,
    ProductComponent,
    CartComponent,
    CreateTestimonialUserComponent,
    ErrorComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxSpinnerModule,
    SharedModule,
    GooglePayButtonModule,

    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    HttpClientModule,
    CarouselModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
