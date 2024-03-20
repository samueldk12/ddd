import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("should throw error when name is empty", ()=>{
        expect(()=>{
            let order = new Order("", "123",[]);
        }).toThrowError("Item qtd must be greater than zero");
    });
    
    it("should calculate total", ()=> {
        const item = new OrderItem("i1", "Item 1", 100, 1);
        const item2 = new OrderItem("i2", "Item 2", 200, 1);
        const order = new Order("o1", "c1", [item]);

        const total_order1 = order.total();

        expect(total_order1).toBe(100);

        const order2 = new Order("o1", "c1", [item, item2])
        const total_order2 = order2.total();

        expect(total_order2).toBe(300)
    })
});