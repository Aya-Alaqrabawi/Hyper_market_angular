import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
     CommonModule,
     SharedRoutingModule,
     MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     FormsModule,
     ReactiveFormsModule,
     MatDialogModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
     CommonModule,
    SharedRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule

  ]
})
export class SharedModule{}
