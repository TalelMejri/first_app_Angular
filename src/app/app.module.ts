import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import { TodoListComponent } from './todo-list/todo-list.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDetailsComponent } from './todo-list/todo-details/todo-details.component';
import { AddTodoComponent } from './todo-list/add-todo/add-todo.component';
import {MaterialModule} from "./Material/material.module";
import {YourInterceptor} from '../app/interceptor.service';
import {AuthStore} from "../app/store/auth"
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    HomeComponent,
    TodoListComponent,
    TodoDetailsComponent,
    AddTodoComponent
  ],
  imports: [
    NgxsModule.forRoot([AuthStore]),
    NgxsStoragePluginModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:YourInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule   {

 }
