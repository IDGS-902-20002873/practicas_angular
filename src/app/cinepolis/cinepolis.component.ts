import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  boletos!: number;
  personas!: number;
  nombre!: string;
  precio: number = 12.0;
  descuento!: number;
  descuentoCine!: number;
  subtotal!: number;
  total!: number;
  warning!: string;
  boletosPermitted!: number;

  card: string = 'Si';
  tipoOperaciones = [
    'Si',
    'No'
  ];

  calcular() {
    this.boletosPermitted = 7 * this.personas;
    if (this.boletos <= this.boletosPermitted) {
      switch (this.card) {
        case 'Si':
          if (this.boletos > 5) {
            this.descuento = (this.precio * this.boletos) * 0.15;
            this.subtotal = ((this.precio * this.boletos) - this.descuento);
            this.descuentoCine = this.subtotal * 0.10;
            this.total = this.subtotal - this.descuentoCine;
          }
          else if (this.boletos >= 3 && this.boletos <= 5) {
            this.descuento = (this.precio * this.boletos) * 0.10;
            this.subtotal = ((this.precio * this.boletos) - this.descuento);
            this.descuentoCine = this.subtotal * 0.10;
            this.total = this.subtotal - this.descuentoCine;
          }
          else {
            this.descuento = (this.precio * this.boletos) * 0.10;
            this.total = (this.precio * this.boletos) - this.descuento;
          }
          break;
        case 'No':
          if (this.boletos > 5) {
            this.descuento = ((this.precio * this.boletos) * 0.15);
            this.total = (this.precio * this.boletos) - this.descuento;
          }
          else if (this.boletos >= 3 && this.boletos <= 5) {
            this.descuento = (this.precio * this.boletos) * 0.10;
            this.total = (this.precio * this.boletos) - this.descuento;
          }
          else {
            this.total = (this.precio * this.boletos);
          }
          break;
      }
      this.warning = ''
      return this.total;
    }
    else {
      this.warning = "Se excedió el número de boletos por persona. ¡Intenta de nuevo!"
      return null;
    }
  }
}
