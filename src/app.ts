const pizza = {
  name: 'Pepperoni',
  toppings: ['pepperoni'],
};

function order({ name, toppings }) {
  return { name, toppings };
}

const { name } = order(pizza);

console.log(name);

const toppings = ['pepperoni', 'bacon', 'chilli'];

const [first, ...second] = toppings;

console.log(first, second);