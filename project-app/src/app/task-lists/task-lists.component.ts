import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css']
})
export class TaskListsComponent {

  @Input() newTask!: {id: number; task: string};

  checkTask: boolean = false;

  checkbox(){
    if(this.checkTask == false){
      this.checkTask = true;
  } else {
    this.checkTask = false;
  }
}

deleteTask(){
  console.log(this.newTask);
}
}
