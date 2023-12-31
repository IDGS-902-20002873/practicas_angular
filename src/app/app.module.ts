import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { DistanciaModuloModule } from './distancia/distancia-modulo/distancia-modulo.module';
import { CinepolisModuloModule } from './cinepolis/cinepolis-modulo/cinepolis-modulo.module';
import { ResistenciasModuloModule } from './resistencias/resistencias-modulo/resistencias-modulo.module';
import { AppRoutingModule } from './app.routing.module';
import { PizzasModule } from './pizzas/pizzas-modulo/pizzas.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistanciaModuloModule,
    CinepolisModuloModule,
    ResistenciasModuloModule,
    AppRoutingModule,
    PizzasModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
