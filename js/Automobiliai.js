export class Automobiliai {
    constructor (gamintojas, modelis, gamybosMetai, spalva) {
        this.gamintojas = gamintojas;
        this.modelis = modelis;
        this.gamybosMetai = gamybosMetai;
        this.spalva = spalva;
     }
    intro() {
        return `Patikimas ${this.gamybosMetai} metų "${this.gamintojas}" "${this.modelis}" modelis - puikus Jūsų pasirinkimas 🚗`
    }
}
