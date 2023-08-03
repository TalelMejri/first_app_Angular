import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports:[
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule],

  exports:[
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule]

})
export class MaterialModule{}
