import { Component, ViewChild } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { NgForOf } from '@angular/common';    // подгрузить...
import { Task } from '../../../shared/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent {
  name: String = 'MY EVERYDAY TASKS:';
  @ViewChild('tasksList') tasksList: ListComponent;
  @ViewChild('tasksItem') tasksItem: ItemComponent;

  constructor() { 
    
  }

  taskAdd(task: Task) {
    this.tasksList.taskAdd(task);
  }
  
}
