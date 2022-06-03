import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnuualReportComponent } from './anuual-report/anuual-report.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageAboutComponent } from './manage-about/manage-about.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManageContactComponent } from './manage-contact/manage-contact.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageSlidersComponent } from './manage-sliders/manage-sliders.component';
import { ManageTestimonialsComponent } from './manage-testimonials/manage-testimonials.component';
import { ManageTextsComponent } from './manage-texts/manage-texts.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisteredDetailsComponent } from './registered-details/registered-details.component';
import { SearchComponent } from './search/search.component';
import { TestingComponent } from './testing/testing.component';
import { UserRegisComponent } from './user-regis/user-regis.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';

const routes: Routes = [
  {
    path:'',
    component:ContentComponent
  }, {
    path:'content',
    component:ContentComponent

  },{
    path:'manage',
    component:ManageCategoriesComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'manageproduct',
    component:ManageProductsComponent
  },
  {
    path:'UserRegis',
    component:UserRegisComponent
  },
  {
    path:'ViewUserRegis',
    component:RegisteredDetailsComponent
  },
  {
    path:'AnuualRep',
    component:AnuualReportComponent
  },
  {
    path:'Profile',
    component:ProfileComponent
  },
  {
    path:'MonthlyRep',
    component:MonthlyReportComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'manageAdmin',
    component:ManageAdminsComponent
  },{
    path:'manageContact',
    component:ManageContactComponent
  },{
    path:'manageHome',
    component:ManageHomeComponent
  },{
    path:'manageAbout',
    component:ManageAboutComponent
  },{
    path:'manageSlider',
    component:ManageSlidersComponent
  },{
    path:'manageTestimonial',
    component:ManageTestimonialsComponent
  },{
    path:'managePages',
    component:ManagePagesComponent
  },{
    path:'ViewReports',
    component:ViewReportsComponent
  },{
    path:'testing',
    component:TestingComponent
  },{
    path:'manageTexts',
    component:ManageTextsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
