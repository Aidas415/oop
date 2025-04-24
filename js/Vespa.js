import { Motociklai } from "./Motociklai.js";

export class Vespa extends Motociklai {
    constructor (gamintojas, modelis, gamybosMetai, spalva, kuras, ratai) {
        super (gamintojas, modelis, gamybosMetai, spalva, kuras, ratai);
        this.variklioTuris = 244;
        this.specifikacija = 'motoroleris/mopedas';
        this.ausinimas = 'skysčiu';
        this.svoris = 120;
    }
}
