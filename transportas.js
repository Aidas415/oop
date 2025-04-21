import { Audi } from "./js/Audi.js";
import { Volkswagen } from "./js/Volkswagen.js";
import { Renault } from "./js/Renault.js"; 
const Q7 = new Audi ('Q7', 2024, 'juoda', 'benzinas', 'automatine', 'visureigis', 10.1, 85, 5, 2055);
//console.log(Q7);
const touareg = new Volkswagen ('Touareg', 2020, 'raudona', 'dyzelinas', 'automatine', 'krosoveris',  8.4, 90, 5, 2070);
//console.log(touareg);
const espace = new Renault ('Espace', 2024, 'balta', 'benzinas-elektra', 'automatine', 'krosoveris', 4.8, 50, 7, 1625);
//console.log(espace);
console.log(Q7.intro());
console.log(touareg.intro());
console.log(espace.intro());

//XXXXXXXXXXX

import { Suzuki } from "./js/Suzuki.js";
const sfv = new Suzuki ('Suzuki', 'SFV', 2013, 'spalva', 645, 'gatvės/klasikinis', 'benzinas', 'skysciu', 207, 2);
//console.log(sfv);
console.log(sfv.intro());

import { Kawasaki } from "./js/Kawasaki.js"
const gpx = new Kawasaki ('Kawasaki', 'GPX', 2010, 'oranžinė', 650, 'sportinis/kelioninis', 'benzinas', 'skysciu', 206, 2);
//console.log(gpx);
console.log(gpx.intro());

import { Vespa } from "./js/Vespa.js"
const piaggio = new Vespa ('Vespa', 'Piaggio', 2006, 'geltona', 244, 'motoroleris/mopedas', 'benzinas', 'skysciu', 120, 2);
console.log(piaggio);
console.log(piaggio.intro());

import { Jawa } from "./js/Jawa.js"
const j350 = new Jawa ('Jawa', 'J350', 1991, 'raudona', 350, 'gatves/klasikinis', 'benzinas', 'oru', 342, 2);
console.log(j350);
console.log(j350.intro());








