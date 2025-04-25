import { Automobiliai } from "./Automobiliai.js";

export class Renault extends Automobiliai {
    constructor (gamintojas, modelis, gamybosMetai, spalva) {
        super (gamintojas, modelis, gamybosMetai, spalva);
        this.kuroTipas = 'benzinas-elektra';
        this.transmisija = 'automatinė';
        this.kuroSanaudos = 4.6;
        this.kuroBakas = 50;
        this.sedimosVietos = 7;
    }
}









