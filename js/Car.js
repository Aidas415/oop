/*
    intro() - apibudina masinos modeli ir salva.
    drive() - nurodzius norima nuvaziuoti atstuma, yra paskaiciuojamos degalu sanaudos, jei nepakanka degalu, tai ribiniu atveju tiesiog sustoja ir masina issijungia.
    engineOn() - ijungia varikli, jei yra kuro ir jei yra isjungtas.
    engineOff() - isjungia varikli, jei yra ijungtas.
    refill() - uzpilti degalu, bet ne daugiau nei telpa. 
*/
export class Car{
    constructor(model, color, tankMax, output){
        this.model = model;
        this.color = color;
        this.tankMax = tankMax;
        this.tank = 0;
        this.engineIsOn = false;
        this.output = output;
        this.travel = 0;
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
    engineOn() {
        if (this.engineIsOn) {
            return `Error: engine is already on.`;
        }
        if (this.tank === 0) {
            `Error: engine can not turned on, because need some gas.`;
        }
        
        this.engineIsOn = true;
    }
    engineOff() {
        if (!this.engineIsOn) {
            return `Error: engine is already turned off.`;
        }
        this.engineIsOn = false;
    }
    drive() {
        if (this.tank === 0) {
            return `Drive can not, because need some gas.`;
        }
        if (this.tank > 0) {
            return `Drive car as long as have enouth gas.`
        }
        if (this.travel === 600) {
            return `For trip needed ${this.travel * this.output}l gas.`
        }

    }
    
}



