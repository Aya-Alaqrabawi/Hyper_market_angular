import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayInvoiceComponent } from './display-invoice/display-invoice.component';
import { SearchBarCodeComponent } from './search-bar-code/search-bar-code.component';
import { ViewUpdateProfileComponent } from './view-update-profile/view-update-profile.component';

const routes: Routes = [
  {
    path:'',
    component:ViewUpdateProfileComponent
  }, 
  {
    path:'content',
    component:ContentComponent

  },
  {
    path:'dashboard',
    component:DashboardComponent

  },
  {
    path:'search',
    component:SearchBarCodeComponent

  },
  {
    path:'viewToUpdate',
    component:ViewUpdateProfileComponent

  },
  {
    path:'invoice',
    component:DisplayInvoiceComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
