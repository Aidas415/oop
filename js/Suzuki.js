import { Motociklai } from "./Motociklai.js";

export class Suzuki extends Motociklai {
    constructor (gamintojas, modelis, gamybosMetai, spalva, kuras, ratai) {
       super (gamintojas, modelis, gamybosMetai, spalva, kuras, ratai);
       this.variklioTuris = 645;
       this.specifikacija = 'gatvės/klasikinis';
       this.ausinimas = 'skysčiu';
       this.svoris = 207;
    }
};

