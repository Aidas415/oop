import { Audi } from "./js/Audi.js";
import { Volkswagen } from "./js/Volkswagen.js";
import { Renault } from "./js/Renault.js"

const Q7 = new Audi ('Q7', 2024, 'juoda', 'benzinas', 'automatine', 'visureigis', 10.1, 85, 5, 2055);
console.log(Q7);
const touareg = new Volkswagen ('Touareg', 2020, 'raudona', 'dyzelinas', 'automatine', 'krosoveris',  8.4, 90, 5, 2070);
console.log(touareg);
const espace = new Renault ('Espace', 2024, 'balta', 'benzinas-elektra', 'automatine', 'krosoveris', 4.8, 50, 7, 1625);
console.log(espace);




