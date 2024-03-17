export default class Address{

    _id: string;
    _street: string = '';
    _number: number = 0;
    _zipCode: string = ''; 
    _city: string = '';
    _country: string = '';
    _activated: boolean = false;

    constructor(id: string, street: string, number: number, zipCode: string, city: string, country: string) {
        this._id = id;
        this._street = street;
        this._number = number;
        this._zipCode = zipCode;
        this._city = city;
        this._country = country;
        this.validade();
    }

    validade(){ 
        if(this._street === '' || this._id === ''){
            throw new Error('Adress invalid');
        }
    }
}