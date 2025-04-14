/*
    intro() - apibudina masinos modeli ir salva.
    drive() - nurodzius norima nuvaziuoti atstuma, yra paskaiciuojamos degalu sanaudos, jei nepakanka degalu, tai ribiniu atveju tiesiog sustoja ir masina issijungia.
    engineOn() - ijungia varikli, jei yra kuro ir jei yra isjungtas.
    engineOff() - isjungia varikli, jei yra ijungtas.
    refill() - uzpilti degalu, bet ne daugiau nei telpa. 
*/
export class Car{
    constructor(model, color, tankMax){
        this.model = model;
        this.color = color;
        this.tankMax = tankMax;
        this.tank = 0;
        this.engineIsOn = false;
    }
    intro() {
        return `This is ${this.color} ${this.model}.`;
    }
    refill(volume) {
        if (typeof volume !== 'number' || !isFinite(volume)) {
            return `Error: only numbers allowed`;
        }
        if (volume < 0) {
            return `Refill with ${volume} litres is not allowed.`;
        }
        if (this.engineIsOn) {
            return `Error: to refill a tank, you must turn off engine first.`;
        }
        if(this.tankMax - this.tank >= volume) {
            this.tank += volume;
        } 
        else {
            this.tank = this.tankMax;
        }    
    }
    travel() {
        
    }
}

