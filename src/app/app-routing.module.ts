import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component"
import {HomeComponent} from "./home/home.component"
import {ContactComponent} from "./contact/contact.component"
import {NotFoundComponent} from "./not-found/not-found.component"
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-list/todo-details/todo-details.component';
import { AddTodoComponent } from './todo-list/add-todo/add-todo.component';
import { Store } from '@ngxs/store';
import { AuthGuard } from './auth.guard';

export function loadCartModule() {
  return import('./cart/cart.module').then(m => m.CartModule);
}

export function loadCoursesModule() {
  return import('./courses/courses.module').then(m => m.CoursesModule);
}

export function loadAuthModule() {
  return import('./todo-list/auth/auth.module').then(m => m.AuthModule);
}

// ng g guard auth
const routes: Routes = [
  {path: '', loadChildren: loadAuthModule },
  {path:'props',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'Todo',component:TodoListComponent,canActivate:[AuthGuard]},
  {path:'TodoDetails/:id',component:TodoDetailsComponent},
  {path:'add/:id',component:AddTodoComponent},
  {path: 'cart', loadChildren: loadCartModule },
  {path: 'course', loadChildren: loadCoursesModule },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
