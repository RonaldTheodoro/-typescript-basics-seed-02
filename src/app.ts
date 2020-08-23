// eslint-disable-next-line max-classes-per-file
interface ISizes {
  availableSizes: string[];
}

abstract class Sizes implements ISizes {
  constructor(protected sizes: string[]) { }

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes(): string[] {
    return this.sizes;
  }
}

interface IPizza extends ISizes {
  readonly name: string;
  toppings: string[];
  updateSizes(sizes: string[]): void;
  addTopping(topping: string): void;
}

class Pizza extends Sizes implements IPizza {
  toppings: string[] = [];

  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }

  updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);

console.log(pizza.availableSizes);

pizza.updateSizes(['large']);

console.log(pizza.availableSizes);
