import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../../../services/todo.service';
import { Observable } from 'rxjs';
import { TaskOperationResult } from '../../../../shared/task.operation.result';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})

export class FormComponent {
  title: string;
  isError = false;
  isWaiting = false;
  errorMessage: string;
  constructor(private taskService: TaskService) {
  }

@Output() taskPush = new EventEmitter();
  onSubmit() {
    // tslint:disable-next-line:no-debugger
    this.isWaiting = true;
    const postTask: Observable<TaskOperationResult> = this.taskService.postTaskOnServer(this.title);

    this.isError = false;

    postTask.subscribe((data) => {

      this.isWaiting = false;
      if (data.status === 'success') {
         this.title = '';
        this.taskPush.emit(data.task);
      } else if (data.status === 'error') {

        this.isError = true;
        this.errorMessage = data.message;
      }
    });
  }
}


