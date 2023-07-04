import { Component } from '@angular/core';
import { Pizzas } from './pizzas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent{
  id: number = 0;
  pizzas: Pizzas[] = [];
  selectedSize: string = '';
  ham: boolean = false;
  pineapple: boolean = false;
  mushroom: boolean = false;
  subtotal: number = 0;
  delete: boolean = false;
  edit: boolean = false;
  total: number = 0;
  ventas: any[] = [];
  validator: boolean = false;


  pizzaForm!:FormGroup;
  constructor(private readonly fb:FormBuilder){
    this.pizzaForm=this.initForm();
  }

  onSubmit():void{
    this.validator = this.validarForm();
    if(this.edit && this.validator){
      this.editPizza(this.id);
      this.edit = false;
    }else if(this.validator){
      this.obtenerValor();
      this.pizzaForm.reset();
      this.selectedSize = '';
      this.ham = false;
      this.pineapple = false;
      this.mushroom = false;
    }
  }

  obtenerValor():void{
    const nam = this.pizzaForm.get('name')?.value;
    const add = this.pizzaForm.get('address')?.value;
    const pho = this.pizzaForm.get('phone_number')?.value;
    const num = this.pizzaForm.get('num_pizza')?.value;
    const siz = this.selectedSize;
    const ham = this.ham;
    const pin = this.pineapple;
    const mus = this.mushroom;
    const sub = this.calcularSubtotal(num);
    for(let i = 0; i < num; i++){
    this.pizzas.push(
      {
        name:nam,
        address:add,
        phone_number:pho,
        pizza_size:siz,
        num_pizzas:num,
        ingredients:{
          ham:ham,
          pineapple:pin,
          mushroom:mus,
        },
        subtotal:sub,
      }
    );
    }
    console.log(this.pizzas, this.subtotal);
  }

  calcularSubtotal(n:number):number{;
    if(this.selectedSize == 'Chica'){
      this.subtotal = 40;
    }else if(this.selectedSize == 'Mediana'){
      this.subtotal = 80;
    }else if(this.selectedSize == 'Grande'){
      this.subtotal = 120;
    }
    if(this.ham){
      this.subtotal += 10;
    }
    if(this.pineapple){
      this.subtotal += 10;
    }
    if(this.mushroom){
      this.subtotal += 10;
    }
    return this.subtotal;
  }

  showEdit(): void {
    this.edit = !this.edit;
  }

  showEditPizza(pizza: any): void {
    this.edit = true;
    this.id = this.pizzas.indexOf(pizza);
    this.selectedSize = pizza.pizza_size;
    this.ham = pizza.ingredients.ham;
    this.pineapple = pizza.ingredients.pineapple;
    this.mushroom = pizza.ingredients.mushroom;
    this.pizzaForm.patchValue({
      name: pizza.name,
      address: pizza.address,
      phone_number: pizza.phone_number,
      pizza_size: pizza.pizza_size,
      num_pizza: pizza.num_pizzas,
      ingredientes: {
        ham: pizza.ingredients.ham,
        pineapple: pizza.ingredients.pineapple,
        mushroom: pizza.ingredients.mushroom,
      },
    });
  }

  editPizza(index: number): void {
    this.id = index;
    this.pizzas[index] = {
      name: this.pizzaForm.get('name')?.value,
      address: this.pizzaForm.get('address')?.value,
      phone_number: this.pizzaForm.get('phone_number')?.value,
      pizza_size: this.selectedSize,
      num_pizzas: this.pizzaForm.get('num_pizza')?.value,
      ingredients: {
        ham: this.ham,
        pineapple: this.pineapple,
        mushroom: this.mushroom,
      },
      subtotal: this.calcularSubtotal(
        this.pizzaForm.get('num_pizza')?.value
      ),
    };
    this.pizzaForm.reset();
    this.selectedSize = '';
    this.ham = false;
    this.pineapple = false;
    this.mushroom = false;
  }

  removePizza(index: number): void {
    this.pizzas.splice(index, 1);
  }

  showDelete(): void {
    this.delete = !this.delete;
  }

  calculateTotal(): void {
    this.pizzas.forEach((pizza) => {
      this.total += pizza.subtotal;
    });
  }

  showVentas(): void {
    Swal.fire({
      icon: 'question',
      title: '¿Estas seguro de terminar la venta?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Terminar',
      confirmButtonColor: 'green',
      denyButtonText: `No terminar`,
      denyButtonColor: 'red',
    }).then((result) => {
      if (result.isConfirmed) {
        this.calculateTotal();
        for (let i = 0; i < this.pizzas.length; i++) {
          this.ventas.push({
            name: this.pizzas[i].name,
            subtotal: this.pizzas[i].subtotal,
          });
        }
        this.pizzas = [];
        Swal.fire('¡Hecho!', 'Registro de venta éxitoso', 'success')
      } else if (result.isDenied) {
        Swal.fire('Los cambios no fueron guardados', '', 'info')
      }
    });
  }

  validarForm():boolean{
    if(this.selectedSize == '' && 
      this.ham == false && 
      this.pineapple == false && 
      this.mushroom == false){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡No puede haber campos vacios!',
      });
      return false;
    }
    if(this.pizzaForm.get('name')?.value ==='' &&
      this.pizzaForm.get('address')?.value ==='' &&
      this.pizzaForm.get('phone_number')?.value ==='' &&
      this.pizzaForm.get('num_pizza')?.value ===''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡No puede haber campos vacios!',
      });
      return false;
      }
    if (this.pizzaForm.get('num_pizza')?.value <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡No puede haber números negativos o iguales a 0!',
      });
      return false;
    }
    return true;
  }

  initForm():FormGroup{
    return this.fb.group({
      name:['',[Validators.required]],
      address:['',[Validators.required]],
      phone_number:['',[Validators.required]],
      pizza_size:['',[Validators.required]],
      ingredientes:[{
        ham:[''],
        pineapple:[''],
        mushroom:[''],
      }],
      num_pizza:['',[Validators.required]],
    })
  }
}
