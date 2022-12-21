import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  errors : any;
  constructor( private authService : AuthService , private router : Router){
      if (this.authService.isLoggedIn){
        this.router.navigate(['/']);
      }
  }

  email : string = '';
  password : string = '';
  error: boolean = false;
  errorMessage : string = '';

  loginUser(){
    this.authService.login(this.email , this.password).subscribe(res => {
      if(res){
        this.router.navigate(['/tasks']);
      }
      else{
        this.error = true;
        this.errors = [];
        this.errorMessage = "incorrect credentials. please try again";
      }
    },
      error => {
        this.error = true;
        this.errors = error.error.errors;
    });
  }
}
