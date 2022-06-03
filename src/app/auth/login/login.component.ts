import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }
  UserName = new FormControl('' , [Validators.required]);
  PassWord = new FormControl('',[Validators.required,Validators.minLength(8)]);
  ngOnInit(): void {
  }
  submit()
  {
    this.auth.submit(this.UserName,this.PassWord);
  }
}
