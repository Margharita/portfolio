import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../../../shared/task';
import { TaskService } from '../../../../services/todo.service';
import { Observable } from 'rxjs';
import { TaskOperationResult } from '../../../../shared/task.operation.result';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})

export class ItemComponent {
  @Input() item: Task = null;
  @Output() taskDel = new EventEmitter();
  
  isWaiting: boolean = false;
  isModifying: boolean = false;
  isError = false;
  @Input() tasks: Task[] = [];
  errorMessage = '';
  constructor(private taskService: TaskService) { }

  onDelete(item: Task) {
    this.isWaiting = true;
    const del = this.taskService.deleteTaskOnServer(item.id);
    del.subscribe(() => {
    this.taskDel.emit(this.item);
    });
  }

  onToggle(item: Task) {
    this.isWaiting = true;
    this.item.done = !this.item.done;
    const tog = this.taskService.putTaskOnServer(item.id, item.done);
    tog.subscribe((data) => {
      this.isWaiting = false;
      data = item;
      console.log(data);
    });
  }

  onChange(item: Task) {
    this.isError = false;
    this.isModifying = false;
    this.isWaiting = true;
    const chang: Observable<TaskOperationResult> = this.taskService.changeTaskNameOnServer(item.id, item.title);
    chang.subscribe((data) => {
      this.isWaiting = false;
      if (data.status === 'success') {
        data.task = item;
        console.log(item);
      } else if (data.status === 'error') {
        debugger;
        this.isError = true;
        this.errorMessage = data.message;
      }
    });
  }

}