import { Component, OnInit } from '@angular/core';
import { TaskService } from '../todo.service';
import { Task } from '../shared/task';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})

export class ListComponent implements OnInit {
  tasks: Task[] = [];
  task: Task;
  isWaiting: boolean = false;

  constructor(private taskService: TaskService) { }

  taskAdd(task: Task) {
    this.tasks.push(task);
  }

  ngOnInit() {
    const obs = this.taskService.getTaskOnServer();
    obs.subscribe((data) => {
      this.tasks = data;
    });
  }

  delete(task: Task) {
      this.isWaiting = false;
      for (let i = 0; this.tasks.length; i++) {
        if (task.id === this.tasks[i].id) {
          this.tasks.splice(i, 1);
          break;
        }
      }
  }

}
