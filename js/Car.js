/*
    intro() - apibudina masinos modeli ir salva.
    drive() - nurodzius norima nuvaziuoti atstuma, yra paskaiciuojamos degalu sanaudos, jei nepakanka degalu, tai ribiniu atveju tiesiog sustoja ir masina issijungia.
    engineOn() - ijungia varikli, jei yra kuro ir jei yra isjungtas.
    engineOff() - isjungia varikli, jei yra ijungtas.
    refill() - uzpilti degalu, bet ne daugiau nei telpa ir jei variklis išjungts
*/
export class Car{
    constructor(model, color, tankMax, output){
        this.model = model;
        this.color = color;
        this.tankMax = tankMax;
        this.output = output;
        this.tank = 0;
        this.engineIsOn = false;
    }
    intro() {
        return `This is ${this.color} ${this.model}.`;
    }
    refill(volume) {
        if (this.engineIsOn) {
            return `Error: to refill a tank, you must turn off engine first.`;
        }
        if (typeof volume !== 'number' || !isFinite(volume)) {
            return `Error: only numbers allowed`;
        }
        if (volume < 0) {
            return `Refill with ${volume} litres is not allowed.`;
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
            return `Error: engine is already turned on.`;
        }
        if (this.tank === 0) {
            `Error: engine can not turned on, because need some gas.`;
        }
        else {
            this.engineIsOn = true;
        }
    }
    engineOff() {
        if (!this.engineIsOn) {
            return `Error: engine is already turned off.`;
        }
        this.engineIsOn = false;
    }
//drive() - nurodzius norima nuvaziuoti atstumą, yra paskaičiuojamos degaų sąnaudos, jei nepakanka degalų, tai ribiniu variklis tiesiog išsijungia ir automobilis tiesiog sustoja.
    drive(trip) {
        if (trip = 600){
            return `For the trip need ${(trip * this.output / 100).toFixed(2)} l gas.`
        }
        if (this.tank = this.tankMax) {
            return `You can drive ${(this.tankMax / this.output * 100).toFixed(3)} km.`;
        }
        if (this.tank > 0) {
            return `Then you can drive as long as you have gas.`;
        }
        else if (this.tank === 0) {
            this.engineIsOn = false
            return `Engine turns off and the car stops`
        }

    }
    
}



