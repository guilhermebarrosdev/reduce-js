const people = [
  { id: 1, name: 'Angelica', age: 18 },
  { id: 2, name: 'Ana', age: 19 },
  { id: 3, name: 'Bianca', age: 17 },
  { id: 4, name: 'Carla', age: 18 },
  { id: 5, name: 'Daniela', age: 19 },
  { id: 6, name: 'Elen', age: 19 },
];
// Resultado desejado
//  { 18:2, 19:3, 17:1 }
const agesFrequency = people.reduce((acumulador, { age }) => {
  acumulador[age] = acumulador[age] + 1 || 1;
  return acumulador;
}, {});

console.log(agesFrequency);
