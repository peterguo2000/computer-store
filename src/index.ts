import Checkout from './Checkout'
import Item from './Item'
import pricingRules from './PricingRules'

const item1 = new Item('ipd', 'Super iPad', 549.99)
//const item2 = new Item('mbp', 'MacBook Pro', 1399.99)
const item3 = new Item('atv', 'Apple TV', 109.50)
const item4 = new Item('vga', 'VGA adapter', 30.00)
const checkout = new Checkout(pricingRules)

checkout.scan(item3)
checkout.scan(item3)
checkout.scan(item3)
checkout.scan(item4)
const skus1 = checkout.items.map(item => item.sku);
console.log('SKUs Scanned: ' + skus1 + ' Total expected: $' + checkout.total())
checkout.clear();
checkout.scan(item3)
checkout.scan(item1)
checkout.scan(item1)
checkout.scan(item3)
checkout.scan(item1)
checkout.scan(item1)
checkout.scan(item1)
const skus2 = checkout.items.map(item => item.sku);
console.log('SKUs Scanned: ' + skus2 + ' Total expected: $' + checkout.total())
