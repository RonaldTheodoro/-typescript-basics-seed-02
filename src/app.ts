class Pizza {
  toppings: string[] = [];

  constructor(public name: string) { }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);
