import { Automobiliai } from "./Automobiliai.js";

export class Volkswagen extends Automobiliai{ 
    constructor (gamintojas, modelis, gamybosMetai, spalva) {
        super (gamintojas, modelis, gamybosMetai, spalva);
        this.kuroTipas = 'dyzelinas';
        this.transmisija = 'automatinė';
        this.kuroSanaudos = 8.4;
        this.kuroBakas = 90;
        this.sedimosvietos = 5;
        this.svoris = 2070;
    }
}
