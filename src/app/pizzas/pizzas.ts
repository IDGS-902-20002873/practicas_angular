export interface Pizzas{
    name:string;
    address:string;
    phone_number:string;
    pizza_size:string;
    num_pizzas:number;
    ingredients:Ingredientes;
    subtotal:number;
}

interface Ingredientes {
    ham:boolean;
    pineapple:boolean;
    mushroom:boolean;
}