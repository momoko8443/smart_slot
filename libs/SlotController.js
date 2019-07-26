const gpio = require('gpio');

function SlotController(){
    let slotMap = {};

    this.getPin = function(pinNum){
        return slotMap[pinNum];
    };

    this.registryPin = function(pinNum,direction,callback){
        if(slotMap[pinNum]){
            throw new Error(`[error] pin ${pinNum} has already been registried`);
        }
        let result = checkArgument(pinNum,direction);
        if(!result){
            throw new Error('[error] arguments of pin invalid');
        }
        let outin = direction === 'in' ? gpio.DIRECTION.IN : gpio.DIRECTION.OUT;
        const pin = gpio.export(pinNum, {direction: outin,interval: 500});
        slotMap[pinNum] = pin;
        return pin;
    };
    function checkArgument(pinNum,direction){
        if(Number.isInteger(pinNum) && pinNum > 0 && pinNum < 28){
            if(typeof direction === 'string'){
                direction = direction.toLowerCase();
                if(direction === 'in' || direction === 'out'){
                    return true;
                }
            }
        }
        return false;
    }
}

const instance = new SlotController();

module.exports = instance;