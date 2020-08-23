class Coupon {
  static allowed = ['Pepperoni', 'Blazing Inferno'];

  static create(percentage: number): string {
    return `PIZZA_RESTAURANT_${percentage}`;
  }
}

console.log(Coupon.allowed);
console.log(Coupon.create(25));
