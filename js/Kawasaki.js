import { Motociklai } from "./Motociklai.js";

export class Kawasaki extends Motociklai {
    constructor (gamintojas, modelis, gamybosMetai, spalva, kuras, ratai) {
        super (gamintojas, modelis, gamybosMetai, spalva, kuras, ratai);
        this.variklioTuris = 650;
        this.specifikacija = 'sportinis/kelioninis';
        this.ausinimas = 'skysčiu';
        this.svoris = 206;
    }
};