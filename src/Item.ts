export default class Item {
    sku = ''
    name = ''
    price = 0.00

    constructor(sku: string, name: string, price: number) {
        this.sku = sku
        this.name = name
        this.price = price
    }
}