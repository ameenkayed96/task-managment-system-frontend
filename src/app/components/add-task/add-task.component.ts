import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  description : string = '';
  category_id : any;
  parent_task : any;
  dead_line : any;
  error: boolean = false;
  errors : any;
  errorMessage : string = '';
  tasks : any[] =[];
  categories : any[] =[];
  sub : any;
  data : any = {};
  constructor( private authService : AuthService , private router : Router,private dataService : DataService){
    this.authService.authinticated();
  }

  
  ngOnInit() {
    this.getTasks();
    this.getCategories();
  }

  getTasks(){
    this.dataService.getAllTasks().subscribe(data => {
      this.tasks = data.content;
    });
  }

  getCategories(){
    this.dataService.getCategories().subscribe(data => {
      this.categories = data.content;
    });
  }


  addTask(){
    if(this.sub){
      this.data = {
        'description' : this.description,
        'parent_task' : this.parent_task,
        'sub' : true,
      }
    }else{
      this.data = {
        'description' : this.description,
        'category_id' : this.category_id,
        'dead_line' : this.dead_line,
      }
    }

    this.dataService.addTask(this.data).subscribe(data => {
      if(data.result == 'success')
        this.router.navigate(['/tasks']);
    },
    error => {
      this.error = true;
      this.errors = error.error.errors;
  });
  }

  checkSub() {
    this.errors = [];
  }

}
