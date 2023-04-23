import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-app';


  taskList = [{
    task: "Task 1"
  },
  {
  task: "Task 2"
  }];

  onNewTaskCreated(newTask: {task: string}){
    this.taskList.push({
      task: newTask.task
    });
  }
}
