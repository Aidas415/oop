export class Motociklai {
    constructor (gamintojas, modelis, gamybosMetai, spalva, kuras, ratai) {
        this.gamintojas = gamintojas;
        this.modelis = modelis;
        this.gamybosMetai = gamybosMetai;
        this.spalva = spalva;
        this.kuras = kuras;
        this.ratai = ratai;
    }
    intro () {
        return `Mūsų siūlomas "${this.gamintojas}" dviratės transporto priemonės "${this.modelis}" modelis, tai geriausias pasirinkimas šių dienų miestų spūstyse 🏍️`
    }
}
