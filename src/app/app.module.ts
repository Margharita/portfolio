import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './products/slider/slider.component';
import { CalculatorComponent } from './products/calculator/calculator.component';
import { TodoComponent } from './products/todo/todo.component';

import { SliderService } from '../services/sliderService';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductsModule } from './products/products.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ContactsComponent,
    HomeComponent,
    SliderComponent,
    CalculatorComponent,
    TodoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
