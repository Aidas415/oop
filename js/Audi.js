import { Automobiliai } from "./Automobiliai.js";

export class Audi extends Automobiliai {
    constructor (gamintojas, modelis, gamybosMetai, spalva) {
        super (gamintojas, modelis, gamybosMetai, spalva);
        this.kuroTipas = 'benzinas';
        this.transmisija = 'automatinė';
        this.kuroSanaudos = 10.1;
        this.degaluBakas = 85;
        this.sedimosVietos = 5;
        this.svoris = 2055;
    }   
};
