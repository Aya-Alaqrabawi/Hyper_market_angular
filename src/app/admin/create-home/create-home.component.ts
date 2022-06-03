import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomepageService } from 'src/app/service/homepage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.css']
})
export class CreateHomeComponent implements OnInit {
  adminObj=JSON.parse(localStorage.getItem('user')||'');
  primar=parseInt(this.adminObj.primarysid);
  primarr=parseInt(this.adminObj.firstName);

  constructor(private homepageService:HomepageService,public user:UserService) { }
  CreateForm:FormGroup= new FormGroup({
    FirstText :new FormControl()
  })
  ngOnInit(): void {
  }
  save(){
    this.homepageService.createHome(this.CreateForm.value);
    window.location.reload();
  }



}
