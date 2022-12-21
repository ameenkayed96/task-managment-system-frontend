import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email : string = '';
  password : string = '';
  name : string = '';
  password_confirmation : string = '';
  error: boolean = false;
  errorMessage : string = '';
  errors : any;

  constructor( private authService : AuthService , private router : Router){
      if (this.authService.isLoggedIn) {
        this.router.navigate(['/tasks']);
    }
  }

 registerUser(){
  this.authService.register(this.email , this.password, this.password_confirmation, this.name).subscribe(res => {
    if(res){
      this.router.navigate(['/tasks']);
    }
    else{
      this.error = true;
      this.errors = [];
      this.errorMessage = "pleaze check your information";
    }
  },
    error => {
      this.error = true;
      this.errors = error.error.errors;
  });
 }
 
}
