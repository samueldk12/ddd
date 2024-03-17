import Adress from './entity/address';
import Costumer from './entity/costumer';
import OrderItem from './entity/order_item';
import Order from './entity/order';

let costumer = new Costumer('123','John Doe');

const address = new Adress('123','Main Street', 123, '12345-123', 'New York', 'USA');  
costumer._address = address;
costumer.activate();

const item1 = new OrderItem('123','Product 1', 100, 1);
const item2 = new OrderItem('124','Product 2', 200, 2);

const order = new Order('123', costumer._id, [item1, item2]);