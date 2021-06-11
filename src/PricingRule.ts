import { ItemTotalFunction } from './Utils'
export default class PricingRule {
    sku: string = ''
    getItemTotal: ItemTotalFunction = () => 0.0

    constructor(sku: string, getItemTotal: ItemTotalFunction) {
        this.sku = sku
        this.getItemTotal = getItemTotal
    }
}