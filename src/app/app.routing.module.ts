import { NgModule }           from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { SliderComponent } from './products/slider/slider.component';
import { CalculatorComponent } from './products/calculator/calculator.component';
import { TodoComponent } from './products/todo/todo.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductsModule } from './products/products.module';



const appRoutes: Routes =[
  //this place contains products routes
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent},
    { path: 'contacts', component: ContactsComponent },
    { path: '**', component: PageNotFoundComponent }
    // { path: 'products/:productId', component: SliderComponent},
    // { path: 'products/:productId', component: CalculatorComponent},
    // { path: 'products/:productId', component: TodoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}