import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent {

  @Output() taskCreated = new EventEmitter<{id: number; task: string}>();

  newTask: string = "";
  id: number = 0;

  AddNewTask(){
    this.taskCreated.emit({
      id: this.id++,
      task: this.newTask
    });
    this.newTask = "";
  }

}
