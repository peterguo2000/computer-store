"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Checkout_1 = require("./Checkout");
const Item_1 = require("./Item");
const PricingRules_1 = require("./PricingRules");
const item1 = new Item_1.default('ipd', 'Super iPad', 549.99);
//const item2 = new Item('mbp', 'MacBook Pro', 1399.99)
const item3 = new Item_1.default('atv', 'Apple TV', 109.50);
const item4 = new Item_1.default('vga', 'VGA adapter', 30.00);
const checkout = new Checkout_1.default(PricingRules_1.default);
checkout.scan(item3);
checkout.scan(item3);
checkout.scan(item3);
checkout.scan(item4);
const skus1 = checkout.items.map(item => item.sku);
console.log('SKUs Scanned: ' + skus1 + ' Total expected: $' + checkout.total());
checkout.clear();
checkout.scan(item3);
checkout.scan(item1);
checkout.scan(item1);
checkout.scan(item3);
checkout.scan(item1);
checkout.scan(item1);
checkout.scan(item1);
const skus2 = checkout.items.map(item => item.sku);
console.log('SKUs Scanned: ' + skus2 + ' Total expected: $' + checkout.total());
//# sourceMappingURL=index.js.map