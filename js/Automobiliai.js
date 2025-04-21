export class Automobiliai {
    constructor (modelis, gamybosMetai, spalva, kuroTipas, transmisija, kebulas, sanaudos, degaluBakas, sedimosVietos, mase) {
        this.modelis = modelis;
        this.gamybosMetai = gamybosMetai;
        this.spalva = spalva;
        this.kuroTipas = kuroTipas;
        this.transmisija = transmisija;
        this.kebulas = kebulas;
        this.sanaudos = sanaudos;
        this.degaluBakas = degaluBakas;
        this.sedimosVietos = sedimosVietos;
        this.mase = mase;
    }
    intro() {
        return `Patikimas ${this.modelis} modelis - puikus tavo pasirinkimas!`
    }

}




