const pizzaCost: number = 10;
const pizzaToopings: number = 5;

function calculatePrice(cost: number, toopings: number): number {
  return cost + 1.5 * toopings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToopings);

console.log(`Pizza costs: ${cost}`);
