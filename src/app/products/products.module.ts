import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';
import { ProductsComponent } from './products.component';
import { SliderComponent } from './slider/slider.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SliderService } from './slider/slider.service';
import { PaintComponent } from './paint/paint.component';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './todo/list/list.component';
import { ItemComponent } from './todo/item/item.component';
import { FormComponent } from './todo/form/form.component';
import { TaskService } from './todo/todo.service';


const prRoutes: Routes = [
     {path: 'products', component: ProductsComponent, children: [
         {path: 'slider', component: SliderComponent },
         {path: 'calc', component: CalculatorComponent},
         {path: 'todo', component: TodoComponent},
         {path: 'paint', component: PaintComponent}
     ]}
    
]

@NgModule({
    declarations: [
        SliderComponent,
        CalculatorComponent,
        PaintComponent,
        TodoComponent,
        FormComponent,
        ListComponent,
        ItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(prRoutes)        
    ],
    providers: [SliderService, TaskService],
})
export class ProductsModule { }