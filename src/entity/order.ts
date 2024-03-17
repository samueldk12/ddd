import OrderItem from "./order_item";

export default class Order{

    _id: string;
    _costumerId: string;
    _items: OrderItem[];

    constructor(id: string, costumerId: string, items: OrderItem[]) {
        this._id = id;
        this._costumerId = costumerId;
        this._items = items;
        this.validade();
    }

    validade(){
        if(this._costumerId === '' || this._id === ''){
            throw new Error('Order invalid');
        }
    }
}