import {Car} from './js/Car.js';

const volvo = new Car('Volvo S40', 'red', 55, 7);
const zapas = new Car('Zapas', 'white', 35, 6);
console.log(volvo.intro());
console.log(zapas.intro());
zapas.refill(0);
console.log(zapas.refill(-5));
console.log(zapas.refill(null));
console.log(zapas.refill('pazadais uzpildyti'));
console.log(zapas.refill(NaN));
console.log(zapas.refill(Infinity))
console.log(zapas);

