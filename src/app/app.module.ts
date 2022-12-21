import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TasksComponent,
    TaskComponent,
    AddTaskComponent,
    PaginationComponent,
    BackBtnComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule, 
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
