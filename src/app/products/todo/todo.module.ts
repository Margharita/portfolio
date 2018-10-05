import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';
import { TodoComponent } from './todo.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ItemComponent } from './item/item.component';
import { TaskService } from './todo.service';


@NgModule({
    declarations: [
        TodoComponent,
        ListComponent,
        FormComponent,
        ItemComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule  
    ],
    providers: [TaskService],
})
export class TodoModule { }