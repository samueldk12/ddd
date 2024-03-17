import  Address  from './address';

export default class Costumer {
    _id: string;
    _name: string;
    _address!: Address;
    _activated: boolean = false;


    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validade();
    }

    get name(): string{
        return this._name;
    }
    
    isActive(): boolean{
        return this._activated;
    }

    validade(){
        if(this._name === '' || this._id === ''){
            throw new Error('Costumer invalid');
        }
    }

    changeName(name: string){
        this._name = name;
        this.validade();
    }

    activate(){
        if(this._address === undefined)
            throw new Error('Valid Adress is required to activate the costumer');
        this._activated = true;
       
    }

    desactivate(){
        this._activated = false;
    }
}