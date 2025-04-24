export class Sunkvezimiai {
    constructor (gamintojas, gamybosMetai, spalva, ratuSistema) {
        this.gamintojas = gamintojas;
        this.gamybosMetai = gamybosMetai;
        this.spalva = spalva;
        this.ratuSistema = ratuSistema;
    }
    intro() {
        return `"${this.gamintojas}" sunkvežimių ${this.transmisija} transmisija neleis vairuotojams pervargti, taupus ${this.kuroTipas} kuras padės pristatyti krovinį nebrangiai, o su "${this.gamintojas}" ${this.galingumas} kW galios vilkikais juos pristatysite dar ir laiku 🚛`;
    }
  };
