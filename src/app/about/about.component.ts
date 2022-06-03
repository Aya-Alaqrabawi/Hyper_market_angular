import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutService } from '../service/about.service';
import { UserregisService } from '../service/userregis.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route:Router,public about:AboutService,public userRegisService:UserregisService) { }

  ngOnInit(): void {
    this.about.getAll();
    this.userRegisService.getUserRegis();
  }
  goToPro()
  {
    this.route.navigate(['product']);
  }
}
