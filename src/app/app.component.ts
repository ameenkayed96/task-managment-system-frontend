import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Managment System';

  constructor(private authService : AuthService, private router : Router){
    this.authService.authinticated();
    if(this.authService.isLoggedIn)
      this.router.navigate(['/tasks']);

  }

  loggedUser(){
    return this.authService.isLoggedIn;
  }

  logout(){
    return this.authService.logout();
  }
}
