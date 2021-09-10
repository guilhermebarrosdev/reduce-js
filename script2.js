const cart = [
  { name: 'Dark Souls III', price: 99.99 },
  { name: 'The Last Of US', price: 199.99 },
  { name: 'GTV V', price: 89.99 },
  { name: 'Red Redemption 2', price: 299.99 },
];
//  - Nome 1
//  - Nome 2
//  - Nome 3
//  - Nome 4
const productList = cart.reduce(
  (accumulator, { name }) => `${accumulator}- ${name}\n`,
  ''
);
console.log(productList);
