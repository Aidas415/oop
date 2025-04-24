import { Sunkvezimiai } from "./Sunkvezimiai.js";

export class Volvo extends Sunkvezimiai {
    constructor (gamintojas, gamybosMetai, spalva, ratuSistema) {
        super (gamintojas, gamybosMetai, spalva, ratuSistema);
        this.variklioTuris = 13000;
        this.galingumas = 331;
        this.kuroTipas = 'dyzelinas';
        this.transmisija = 'automatinė';
    }
}



