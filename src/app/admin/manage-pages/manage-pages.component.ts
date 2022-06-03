import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-pages',
  templateUrl: './manage-pages.component.html',
  styleUrls: ['./manage-pages.component.css']
})
export class ManagePagesComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  GotoContactus(){
this.route.navigate(['admin/manageContact']);
  }
  GotoAboutus(){
    this.route.navigate(['admin/manageAbout']);
  }
  GotoHome(){
    this.route.navigate(['admin/manageHome']);
  }
  GotoSlider(){
    this.route.navigate(['admin/manageSlider']);

  }
}