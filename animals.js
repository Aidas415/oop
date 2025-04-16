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

/*
Elektronika:
   Smart phone:
      - Samsung smart phone
      - Apple smart phone
      -Nokia smart phone
   Tablet:
      - Samsung tablet
      - Xiomi tablet
   Laptop:
      - Asus
      - Lenovo
      - IBM

*/


/*
Animal:
    Pet:
       - Dog
       - cat
       - hamster
    Bird:
       - Parrot
       - Hummingbird
       - Eagle

    Fish:    
       - Shark
       - Dolphin
       - Tuna  
       - Pike  
*/

import { Cat } from "./js/Cat.js";
import {Dog} from "./js/Dog.js";
import { Hamster } from "./js/Hamster.js";

const rex = new Dog ('Rex', 'black');
const rainis = new Cat ('Rainis', 'mixed');
const keksas = new Hamster ('Keksas', 'brown');
console.log(rainis);
console.log(rex);
console.log(keksas);