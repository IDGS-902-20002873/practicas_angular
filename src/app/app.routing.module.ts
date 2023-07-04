import{RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { DistanciaComponent } from './distancia/distancia.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { PizzasComponent } from './pizzas/pizzas.component';

const routes:Routes=[
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'distancia', component: DistanciaComponent},
    {path:'resistencias', component: ResistenciasComponent},
    {path:'cinepolis', component: CinepolisComponent},
    {path:'pizzas', component: PizzasComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}