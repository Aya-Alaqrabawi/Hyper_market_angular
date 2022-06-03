import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { SharedModule } from '../shared/shared.module';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { RegisteredDetailsComponent } from './registered-details/registered-details.component';
import { UserRegisComponent } from './user-regis/user-regis.component';
import { AnuualReportComponent } from './anuual-report/anuual-report.component';
import { ProfileComponent } from './profile/profile.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { SearchComponent } from './search/search.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { CreateAdminsComponent } from './create-admins/create-admins.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageAboutComponent } from './manage-about/manage-about.component';
import { ManageContactComponent } from './manage-contact/manage-contact.component';
import { CreateHomeComponent } from './create-home/create-home.component';
import { CreateAboutComponent } from './create-about/create-about.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ManageSlidersComponent } from './manage-sliders/manage-sliders.component';
import { CreateSliderComponent } from './create-slider/create-slider.component';
import { NgChartsModule } from 'ng2-charts';
import { ManageTestimonialsComponent } from './manage-testimonials/manage-testimonials.component';
import { CreateTestimonialComponent } from './create-testimonial/create-testimonial.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';
import {MatTreeModule} from '@angular/material/tree';
import { TestingComponent } from './testing/testing.component';
import { ManageTextsComponent } from './manage-texts/manage-texts.component';
@NgModule({
  declarations: [
    DashboardComponent,
    ContentComponent,
    ManageCategoriesComponent,
    CreateCategoriesComponent,
    ManageProductsComponent,
    CreateProductsComponent,
    RegisteredDetailsComponent,
    UserRegisComponent,
    AnuualReportComponent,
    ProfileComponent,
    MonthlyReportComponent,
    SearchComponent,
    ManageAdminsComponent,
    CreateAdminsComponent,
    ManagePagesComponent,
    ManageHomeComponent,
    ManageAboutComponent,
    ManageContactComponent,
    CreateHomeComponent,
    CreateAboutComponent,
    CreateContactComponent,
    ManageSlidersComponent,
    CreateSliderComponent,
    ManageTestimonialsComponent,
    CreateTestimonialComponent,
    ViewReportsComponent,
    TestingComponent,
    ManageTextsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    NgChartsModule,
    MatTreeModule,
    MatDatepickerModule
  ]
})
export class AdminModule { }
