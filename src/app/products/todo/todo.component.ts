import { Component, ViewChild } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { Task } from './shared/task';
import { NgForOf } from '@angular/common';    


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent {
  name: String = 'My everyday tasks:';
  @ViewChild('tasksList') tasksList: ListComponent;
  @ViewChild('tasksItem') tasksItem: ItemComponent;

  constructor() { 
    
  }

  taskAdd(task: Task) {
    this.tasksList.taskAdd(task);
  }
  
}
