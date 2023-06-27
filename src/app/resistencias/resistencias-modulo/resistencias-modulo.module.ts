import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import { ResistenciasComponent } from '../resistencias.component';

@NgModule({
  declarations: [
    ResistenciasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
  ],
  exports:[
    ResistenciasComponent,
  ]
})
export class ResistenciasModuloModule { }
