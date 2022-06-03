import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  constructor(private contactService:ContactService) { }
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
    window.location.reload();
  }
}
