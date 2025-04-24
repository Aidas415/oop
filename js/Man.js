import { Sunkvezimiai } from "./Sunkvezimiai.js";

export class Man extends Sunkvezimiai {
    constructor (gamintojas, gamybosMetai, spalva, ratuSistema) {
        super (gamintojas, gamybosMetai, spalva, ratuSistema); 
        this.variklioTuris = 12419;
        this.galingumas = 346;
        this.kuroTipas = 'dyzelinas';
        this.transmisija = 'automatinė';
    }
}
