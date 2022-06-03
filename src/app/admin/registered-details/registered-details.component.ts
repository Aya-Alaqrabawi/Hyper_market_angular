import { Component, OnInit } from '@angular/core';
import { ViewregisService } from 'src/app/service/viewregis.service';

@Component({
  selector: 'app-registered-details',
  templateUrl: './registered-details.component.html',
  styleUrls: ['./registered-details.component.css']
})
export class RegisteredDetailsComponent implements OnInit {

  constructor(public viewUserRegisService:ViewregisService) { }

  ngOnInit(): void {
    this.viewUserRegisService.ViewUserRegisteredDetails();
  }

}
