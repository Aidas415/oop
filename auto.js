import { Car } from './js/Car.js';

const volvo = new Car('Volvo S40', 'red', 55, 7.2);
const zapas = new Car('Zapas', 'white', 35, 6.4);
//console.log(volvo.intro());                         // This is red Volvo S40
//console.log(zapas.intro());                         // This is white Zapas
//zapas.refill(0);
//console.log(zapas.refill(-5));                      // Refill with -5 litres is not alowed
//console.log(zapas.refill(null));                    // Error: only numbers allowed
//console.log(zapas.refill('pazadais uzpildyti'));    // Error: only numbers allowed
//console.log(zapas.refill(NaN));                     // Error: only numbers allowed
//console.log(zapas.refill(Infinity))                 // Error: only numbers allowed
//console.log(zapas);                        // Car {
                                           //   model: 'Zapas',
                                           //   color: 'white',
                                           //   tankMax: 35,
                                           //   tank: 0,
                                           //   engineIsOn: false,
                                           //   output: 6,
                                           //   travel: 0,    
//     }

console.log(zapas.drive());
console.log(volvo.drive());




