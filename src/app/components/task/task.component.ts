import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  taskId : any;
  task : any;
  color : string = 'black';

  constructor(private route: ActivatedRoute,private dataService : DataService, private authService : AuthService) {
    this.route.params.subscribe( params => this.taskId = params['id']) ;
    this.authService.authinticated();
  }

  ngOnInit() {
    this.getTask(this.taskId);
  }

  getTask(id : number){
    this.dataService.getTask(id).subscribe(data => {
      this.task = data.content;
      this.color = data.content.categories[0].color;
    });
  }

}
