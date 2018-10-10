import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';
import { ProductsComponent } from './products.component';
import { SliderComponent } from './slider/slider.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoComponent } from './todo/todo.component';
import { SliderService } from './slider/slider.service';
import { TodoModule } from './todo/todo.module';
import { PaintComponent } from './paint/paint.component';


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
        PaintComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TodoModule,
        RouterModule.forChild(prRoutes)        
    ],
    providers: [SliderService],
})
export class ProductsModule { }