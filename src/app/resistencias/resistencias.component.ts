import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  lista1: string[] = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Gray', 'White'];
  tipoTolerancia: string[] = ['Gold', 'Silver'];
  banda1: number = 0;
  banda2: number = 0;
  banda3: number = 0;
  tolerancia: string = '';
  valor: number = 0;
  minimo: number = 0;
  maximo: number = 0;
  porcentaje: number = 0;

  calcular() {
    let colores: { [key: string]: number } = {
      'Black': 0,
      'Brown': 1,
      'Red': 2,
      'Orange': 3,
      'Yellow': 4,
      'Green': 5,
      'Blue': 6,
      'Violet': 7,
      'Gray': 8,
      'White': 9,
      'Gold': 0.05,
      'Silver': 0.10
    };

    let valor1 = colores[this.lista1[this.banda1]];
    let valor2 = colores[this.lista1[this.banda2]];
    let multiplicador = Math.pow(10, this.banda3);

    this.valor = (valor1 * 10 + valor2) * multiplicador;

    if (this.tolerancia === 'Gold') {
      this.minimo = this.valor - (this.valor * 0.05);
      this.maximo = this.valor + (this.valor * 0.05);
      this.porcentaje = 5;
    } else if (this.tolerancia === 'Silver') {
      this.minimo = this.valor - (this.valor * 0.10);
      this.maximo = this.valor + (this.valor * 0.10);
      this.porcentaje = 10
    }
  }
}
