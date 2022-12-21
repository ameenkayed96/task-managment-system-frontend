import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';
import { OnInit } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  isLoading = false;
  tasks : any[] = [];
  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();
  // for pagination
  total: any;
  pageOffset: any;
  pageIndex: any;
  paginator : any = {
    total_page : 0,
    current_page : 0,
  };
  searchText : string='';
  page : number = 1;
  constructor( private authService : AuthService , private router : Router,private dataService : DataService){
      this.authService.authinticated();
  }

  ngOnInit() {
    this.getTasks(this.page,this.searchText);
  }

  receivePaginationdData(data : any) {
    this.page = data.page;
    this.getTasks(this.page,this.searchText);
  }

  getTasks(page : number, search : string){
     this.dataService.getTasks(page,search).subscribe(data  => {
        this.tasks = data.content;
        this.paginator.total_page = data.paginator.total_page;
        this.paginator.current_page = data.paginator.current_page;

    });
  }

  search(){
    this.page = 1;
    this.getTasks(this.page,this.searchText);
  }
}
