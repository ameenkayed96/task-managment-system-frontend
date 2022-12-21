import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { HttpClient , HttpHeaders , HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  REST_API : string = 'http://127.0.0.1:8000/api/';

  httpHeaders :any= new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.authService.getToken()}`
  });
  
  constructor(private httpClient : HttpClient,private authService : AuthService) {   
  }

  addTask(data:any) : Observable<any>{
    const requestOptions = { headers: this.httpHeaders };
    let API_URL = this.REST_API + 'tasks/create';
    return this.httpClient.post(API_URL,data,requestOptions);
  }

  getTasks(page : number , search : string) : Observable<any>{
    const requestOptions = { headers: this.httpHeaders };
    let API_URL = this.REST_API  + 'tasks'+ "/?page=" + page + "&search="+search;
    return this.httpClient.get(API_URL,requestOptions);
  }

  getAllTasks() : Observable<any>{
    const requestOptions = { headers: this.httpHeaders };
    let API_URL = this.REST_API  + 'tasks/all/tasks';
    return this.httpClient.get(API_URL,requestOptions);
  }

  getCategories() : Observable<any>{
    const requestOptions = { headers: this.httpHeaders };
    let API_URL = this.REST_API + 'categories';
    return this.httpClient.get(API_URL,requestOptions).pipe(catchError(this.handleError));
  }

  getTask(id : any) : Observable<any>{
    const requestOptions = { headers: this.httpHeaders };
    let API_URL = this.REST_API + 'tasks/' + id;
    return this.httpClient.get(API_URL,requestOptions).pipe(map((res:any) => {
      return res || {};
    }),catchError(this.handleError));
  }

  

  handleError(error : HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }
    else{
      errorMessage = `Error Code : ${error.status}\n Message : ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
