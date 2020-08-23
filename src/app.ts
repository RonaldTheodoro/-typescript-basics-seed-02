// eslint-disable-next-line max-classes-per-file
abstract class Sizes {
  constructor(protected sizes: string[]) { }

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes(): string[] {
    return this.sizes;
  }
}

class Pizza extends Sizes {
  toppings: string[] = [];

  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }

  set updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);

console.log(pizza.availableSizes);

pizza.updateSizes = ['large'];

console.log(pizza.availableSizes);
