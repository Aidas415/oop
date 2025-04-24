import { Motociklai } from "./Motociklai.js";

export class Jawa extends Motociklai{
    constructor (gamintojas, modelis, gamybosMetai, spalva, kuras, ratai) {
        super (gamintojas, modelis, gamybosMetai, spalva, kuras, ratai);
        this.variklioTuris = 350;
        this.specifikacija = 'gatvės/klasikinis';
        this.ausinimas = 'oru';
        this.svoris = 342;
    }
};
