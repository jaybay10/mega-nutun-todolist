import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-app';

  taskList = [
    {
      id: 0,
      task: "Click check box to mark task as completed"}, 
    {
      id: 1,
      task: "Click the bin icon to delete task"}
    ];

  onNewTaskCreated(newTask: {id: number; task: string}){
    this.taskList.push({
      id: newTask.id,
      task: newTask.task
    });
  }

  deleteItem(currentTask: {id: number; task: string}){
    for (let index = 0; index < this.taskList.length; index++) {
      if(this.taskList[index].id == currentTask.id){
        this.taskList.splice(index, 1);
      }
    }
  }

  ClearTasks(){
    for (let index = 0; index < this.taskList.length; index++) {
      this.taskList = [];
    }
    this.taskList = [];
  }

}
