const coupon: string = 'pizza25';

function normalizaCoupon(code: string): string {
  return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizaCoupon(coupon)}`;

console.log(couponMessage);
