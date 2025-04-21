export class Motociklai {
    constructor (firma, modelis, gamybosMetai, spalva, variklioTuris, specifikacija, kuras, ausinimas, svoris, ratai) {
        this.firma = firma;
        this.modelis = modelis;
        this.gamybosMetai = gamybosMetai;
        this.spalva = spalva;
        this.variklioTuris = variklioTuris;
        this.specifikacija = specifikacija;
        this.kuras = kuras;
        this.ausinimas = ausinimas;
        this.svoris = svoris;
        this.ratai = ratai;
    }
    intro () {
        return `Mūsų siūlomo "${this.firma}" dviračio transporto "${this.modelis}"
         modelis, geriausias pasirinkimas šių dienų miestų spūstyse!`
    }
}
