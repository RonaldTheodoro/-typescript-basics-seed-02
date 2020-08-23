interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  toppings?: number;
  [key: number]: string;
  getAvailableSizes(): string[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[], toppings?: number): Pizza {
  return {
    name,
    sizes,
    toppings,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);

pizza.toppings = 1;
pizza[1] = 'xyz';

console.log(pizza);
