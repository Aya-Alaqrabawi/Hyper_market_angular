import { Component, OnInit } from '@angular/core';
import { UserregisService } from 'src/app/service/userregis.service';

@Component({
  selector: 'app-user-regis',
  templateUrl: './user-regis.component.html',
  styleUrls: ['./user-regis.component.css']
})
export class UserRegisComponent implements OnInit {
  data:any=[]
  
  constructor(public userRegisService:UserregisService) { }

  ngOnInit(): void {
    this.userRegisService.getUserRegis();
    this.userRegisService.getAnuualCount();
    this.userRegisService.getAnuualSum();
  }
  
}
