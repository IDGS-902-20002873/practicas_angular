import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasComponent } from '../pizzas.component';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PizzasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
  ],
  exports:[
    PizzasComponent
  ]
})
export class PizzasModule { }
