class SimCard {
    constructor(number, type, pinCode) {
        this.number = number;
        this.type = type;

        let _pinCode = pinCode;
        // this property is intended to be a private one
        //this is the closure!
        this.getPinCode = () => {
            return _pinCode;
        };
    }
}

const card = new SimCard("444-555-666", "Nano SIM", 1515);
console.log(card._pinCode); // outputs undefined
console.log(card.getPinCode());