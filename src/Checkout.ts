import Item from './Item'
import PricingRule from './PricingRule'
import { Accumulator } from './Utils'

export default class Checkout {
    items: Item[] = []
    pricingRules: PricingRule[]

    constructor(pricingRules: PricingRule[]) {
        this.pricingRules = pricingRules
    }

    scan = (item: Item) => {
        this.items = [...this.items, item];
    }
    clear = () => {
        this.items = []
    }
    total = () => {
        const reducer = (accumulator: Accumulator, pricingRule: PricingRule) => {

            const itemCount = accumulator.leftItems
                .filter(item => item.sku === pricingRule.sku).length;
            return {
                total: accumulator.total + pricingRule.getItemTotal(itemCount),
                leftItems: accumulator.leftItems.filter(item => item.sku !== pricingRule.sku)
            }
        }

        //calculate skus with pricing rules
        const result = this.pricingRules
            .reduce(reducer, { total: 0.0, leftItems: this.items });

        //calculate skus without pricing rules
        return result.leftItems
            .reduce((total: number, item) => total + item.price, result.total);
    }
}