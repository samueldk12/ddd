import Address from "./address";
import Costumer from "./costumer";

describe("Costumer unit tests", () => {
    it("should trow error when id is empty",()=>{
        expect(()=>{
            let constumer = new Costumer('','John Doe');
        }).toThrowErrorMatchingSnapshot("Id is required")
    })

    it("should trow error when name is empty",()=>{
        expect(()=>{
            let constumer = new Costumer('123','');
        }).toThrowErrorMatchingSnapshot("Name is required")
    })

    it("should change costumer name",()=>{
        let costumer = new Costumer('123','John Doe');
        costumer.changeName('Jane');
        expect(costumer.name).toBe('Jane');
    })

    it("should activate client",()=>{
        let costumer = new Costumer('123', 'John Doe');
        const address = new Address("1", "123", 13, "213131","BH","")
        costumer._address = address;

        costumer.activate();
        expect(costumer.isActive()).toBe(true);
    })
});