// eslint-disable-next-line max-classes-per-file
class Sizes {
  constructor(public sizes: string[]) { }

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes(): string[] {
    return this.sizes;
  }
}

const sizes = new Sizes(['small', 'medium']);

console.log(sizes.availableSizes);
sizes.availableSizes = ['medium', 'large'];
console.log(sizes.availableSizes);

class Pizza {
  toppings: string[] = [];

  constructor(readonly name: string) { }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);
