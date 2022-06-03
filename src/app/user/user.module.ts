import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ContentComponent } from './content/content.component';
import { SearchBarCodeComponent } from './search-bar-code/search-bar-code.component';
import { ViewUpdateProfileComponent } from './view-update-profile/view-update-profile.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayInvoiceComponent } from './display-invoice/display-invoice.component';


@NgModule({
  declarations: [
    ContentComponent,
    SearchBarCodeComponent,
    ViewUpdateProfileComponent,
    DashboardComponent,
    DisplayInvoiceComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
