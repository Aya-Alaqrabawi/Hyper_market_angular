import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private toaster:ToastrService,private contactService:ContactService) { }
  CreateForm:FormGroup= new FormGroup({
    name :new FormControl(),
    email :new FormControl(),
    subject :new FormControl(),
    message :new FormControl(),
  })
  ngOnInit(): void {
  }
  save(){
    this.contactService.createContact(this.CreateForm.value);
  }
}
