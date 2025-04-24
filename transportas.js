/*
Transporto priemones:
   Automobiliai:
      - Audi
      - Volksvagen
      - Renault
   Motociklai:
      - Suzuki
      - Kawasaki
      - Jawa
      - Vespa
   Sunkvezimiai:
      - Volvo
      - Man
      - Scania
*/

import { Audi } from "./js/Audi.js";
const Q7 = new Audi ('Audi', 'Q7', 2024, 'juoda');
//console.log(Q7);
console.log(Q7.intro());

import { Volkswagen } from "./js/Volkswagen.js";
const touareg = new Volkswagen ('Volkswagen', 'Touareg', 2020, 'raudona');
//console.log(touareg);
console.log(touareg.intro());

import { Renault } from "./js/Renault.js"; 
const espace = new Renault ('Renault', 'Espace', 2024, 'balta'); 
//console.log(espace);
console.log(espace.intro());

console.log('------------')

import { Suzuki } from "./js/Suzuki.js";
const sfv = new Suzuki ('Suzuki', 'SFV', 2013, 'mėlyna', 'benzinas', 2);
//console.log(sfv);
console.log(sfv.intro());

import { Kawasaki } from "./js/Kawasaki.js";
const gpx = new Kawasaki ('Kawasaki', 'GPX', 2010, 'oranžinė', 'benzinas', 2);
//console.log(gpx);
console.log(gpx.intro());

import { Vespa } from "./js/Vespa.js";
const piaggio = new Vespa ('Vespa', 'Piaggio', 2006, 'geltona', 'benzinas', 2);
//console.log(piaggio);
console.log(piaggio.intro());

import { Jawa } from "./js/Jawa.js";
const j350 = new Jawa ('Jawa', 'J350', 1991, 'raudona', 'benzinas', 2);
//console.log(j350);
console.log(j350.intro());

console.log('--------------');

import { Volvo } from "./js/Volvo.js";
const volvo = new Volvo ('Volvo', 2023, 'balta', '4 x 2'); 
//console.log(volvo);
console.log(volvo.intro());

import { Man } from "./js/Man.js";
const man = new Man ('Man', 2024, 'pilka', '4 x 2');
//console.log(man);
console.log(man.intro());

import { Scania } from "./js/Scania.js";
const scania = new Scania ('Scania', 2022, 'balta', '4 x 2') 
//console.log(scania);
console.log(scania.intro());

console.log('--------------')

// Kuris kompanijos vilkikas galingiausias?
/*
const sunkvezimiai = [volvo, man, scania];
console.log(sunkvezimiai);
function galingiausias(sunkvezimiai) {
    let maxPower = 0;
    let vilkikas;
    for (i in sunkvezimiai) {
        if (sunkvezimiai[i].galingumas > maxPower) {
            vilkikas = sunkvezimiai[i].galingumas;
            console.log(vilkikas);

        }

    }
    return vilkikas;
}
*/






