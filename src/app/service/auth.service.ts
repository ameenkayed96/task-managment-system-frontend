import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = "http://localhost:8000/api";

  constructor(private http: HttpClient,public router: Router) { }

  authinticated(){
    if (!this.isLoggedIn) {
       this.router.navigate(['/login']);
    }
  }
  
  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>(this.baseURL+'/login', {email: email, password: password})
      .pipe(
        map(result => {
          if(result.token != null && result.token != 'undefined'){
            localStorage.setItem('access_token', result.token);
            return true;
          }
          else{
            return false;
          }
        
        })
      );
  }

  register(email: string, password: string, password_confirmation: string , name:string): Observable<boolean> {
    return this.http.post<{token: string}>(this.baseURL+'/register', {email: email, password: password,password_confirmation:password_confirmation,name:name})
      .pipe(
        map(result => {
          if(result.token != null && result.token != 'undefined'){
            localStorage.setItem('access_token', result.token);
            return true;
          }
          else{
            return false;
          }
        })
      );
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  logout() {
    let removeToken = localStorage.removeItem('access_token');

    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  public get isLoggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
