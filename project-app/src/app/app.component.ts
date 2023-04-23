import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-app';


  taskList = [{task: "Click check box to mark task as completed"}, {task: "Click the bin icon to delete task"}];

  onNewTaskCreated(newTask: {task: string}){
    this.taskList.push({
      task: newTask.task
    });
  }

  ClearTasks(){
    this.taskList = [];
  }

}
