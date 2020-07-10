import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Service/auth.service';
import {User} from '../models/user'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit { 

  constructor(private route:Router) { }
  user: User;

  ngOnInit(): void {

  }

  /*login() : void{
    this.Authservice
    .login(this.user.email,this.user.password)
    .subscribe(user =>{
      console.log(user);  
    });


  }*/
  

  
 


}



