import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from './products.component';
import { SliderComponent } from './slider/slider.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoComponent } from './todo/todo.component';
import { SliderService } from '../../services/sliderService';
import { TodoModule } from './todo/todo.module';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';


const prRoutes: Routes = [
     {path: 'products', component: ProductsComponent, children: [
         {path: 'slider', component: SliderComponent },
        {path: 'calc', component: CalculatorComponent},
        {path: 'todo', component: TodoComponent}
     ]}
    
]

@NgModule({
    declarations: [
        SliderComponent,
        CalculatorComponent,
        CustomSliderComponent
    ],
    imports: [
        CommonModule,
        TodoModule,
        RouterModule.forChild(prRoutes)        
    ],
    providers: [SliderService],
})
export class ProductsModule { }