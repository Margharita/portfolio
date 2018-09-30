import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from './products.component';
import { SliderComponent } from './slider/slider.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoComponent } from './todo/todo.component';

const prRoutes: Routes = [
     {path: 'products', component: ProductsComponent},
    //   children: [
    //      {path: 'slider', component: SliderComponent },
    //     {path: 'calc', component: CalculatorComponent},
    //     {path: 'todo', component: TodoComponent}
    //  ]}
     {path: 'products/slider', component: SliderComponent},
     {path: 'products/calc', component: CalculatorComponent},
     {path: 'products/todo', component: TodoComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(prRoutes)        
    ]
})
export class ProductsModule { }