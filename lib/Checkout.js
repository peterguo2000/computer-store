"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Checkout {
    constructor(pricingRules) {
        this.items = [];
        this.scan = (item) => {
            this.items = [...this.items, item];
        };
        this.clear = () => {
            this.items = [];
        };
        this.total = () => {
            const reducer = (accumulator, pricingRule) => {
                const itemCount = accumulator.leftItems
                    .filter(item => item.sku === pricingRule.sku).length;
                return {
                    total: accumulator.total + pricingRule.getItemTotal(itemCount, accumulator.context),
                    leftItems: accumulator.leftItems.filter(item => item.sku !== pricingRule.sku),
                    context: accumulator.context
                };
            };
            //calculate skus with pricing rules
            const result = this.pricingRules
                .reduce(reducer, { total: 0.0, leftItems: this.items, context: { items: this.items } });
            return result.total;
        };
        this.pricingRules = pricingRules;
    }
}
exports.default = Checkout;
//# sourceMappingURL=Checkout.js.map