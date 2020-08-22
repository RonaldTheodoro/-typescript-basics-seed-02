const pizza = {
  name: 'Pepperoni',
  price: 15,
  getName() {
    return this.name;
  },
};

console.log(pizza.getName());

const toppings = ['pepperoni'];

function createOrder(pizza: any, toppings: any) {
  return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));
