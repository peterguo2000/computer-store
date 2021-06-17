"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PricingRule {
    constructor(sku, getItemTotal) {
        this.sku = '';
        this.getItemTotal = () => 0.0;
        this.sku = sku;
        this.getItemTotal = getItemTotal;
    }
}
exports.default = PricingRule;
//# sourceMappingURL=PricingRule.js.map