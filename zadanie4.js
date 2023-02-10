let lenovoStatus = 1;
let myLampStatus = 0;

function ElecktricalThing(nameOfThing, powerOfThing, brandOfThing){
    this.name = nameOfThing,
    this.power = powerOfThing,
    this.brand = brandOfThing
};

ElecktricalThing.prototype.turnStatus = function(turnStatus){
    this.status = turnStatus;
};

ElecktricalThing.prototype.showInfo = function(){
    console.group(`${this.name} status info:`);
    console.log(`Your device is ${this.name}`);
    console.log(`Power of your device is ${this.power} watts`);
    console.log(`Brand of your device is ${this.brand}`);
    console.groupEnd();
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

function Laptop (name,power,brand){
    this.name = name,
    this.power = power,
    this.brand = brand
};

Laptop.prototype = new ElecktricalThing();

const lenovo = new Laptop ("Laptop",400,"Lenovo");

function Lamp (name,power,brand){
    this.name = name,
    this.power = power,
    this.brand = brand
};

Lamp.prototype = new ElecktricalThing();

const myLamp = new Lamp ("Lamp",50,"Ikea");

lenovo.turnStatus(lenovoStatus);
myLamp.turnStatus(myLampStatus);

lenovo.showInfo();
myLamp.showInfo();

summaryPowerConsumption(myLamp,lenovo);
