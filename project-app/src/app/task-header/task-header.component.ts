import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent {

  @Output() taskCreated = new EventEmitter<{task: string}>();

  newTask: string = "";

  AddNewTask(){
    this.taskCreated.emit({
      task: this.newTask
    });
  }

}
