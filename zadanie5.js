let lenovoStatus = 1;
let myLampStatus = 1;

class ElecktricalThing{
    constructor(nameOfThing, powerOfThing, brandOfThing){
        this.name = nameOfThing;
        this.power = powerOfThing;
        this.brand = brandOfThing;
    }
    turnStatus(turnStatus){
        this.status = turnStatus;
    }
    showInfo(){
        console.group(`${this.name} status info:`);
        console.log(`Your device is ${this.name}`);
        console.log(`Power of your device is ${this.power} watts`);
        console.log(`Brand of your device is ${this.brand}`);
        console.groupEnd();
    }
};

Object.prototype.summaryPowerConsumption = function(first,second){
    if (first.status === 0){
        first.power = 0;
    }
    if (second.status === 0){
        second.power = 0;
    }
    console.log(`Summary power consumption of your turn on devices is ${first.power+second.power} watt`);
};

class Laptop extends ElecktricalThing{
    constructor(name, power, brand){
        super();
        this.name = name;
        this.power = power;
        this.brand = brand;
    }
};

const lenovo = new Laptop ("Laptop",400,"Lenovo");

class Lamp extends ElecktricalThing{
    constructor(name,power,brand){
        super();
        this.name = name;
        this.power = power;
        this.brand = brand;
    }
};

const myLamp = new Lamp ("Lamp",50,"Ikea");

lenovo.turnStatus(lenovoStatus);
myLamp.turnStatus(myLampStatus);

lenovo.showInfo();
myLamp.showInfo();

summaryPowerConsumption(myLamp,lenovo);
