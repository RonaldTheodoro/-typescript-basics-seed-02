// eslint-disable-next-line max-classes-per-file
abstract class Sizes {
  constructor(public sizes: string[]) { }

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes(): string[] {
    return this.sizes;
  }
}

class Pizza extends Sizes {
  toppings: string[] = [];

  constructor(readonly name: string, public sizes: string[]) {
    super(sizes);
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);

pizza.addTopping('pepperoni');

console.log(pizza);
