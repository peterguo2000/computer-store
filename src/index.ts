import Checkout from './Checkout'
import Item from './Item'
import PricingRule from './pricingRule'

const atvPricingRule = new PricingRule('atv',
  (itemCount: number) => {
    const packageSize = 3
    const price = 109.50
    const packageCount = Math.floor(itemCount / packageSize)
    const normalCount = itemCount % packageSize

    console.log('packageCount: ' + packageCount + 'normalCount:  ' + normalCount)

    const packagePrice = packageCount * (packageSize - 1) * price
    return packagePrice + normalCount * price
  })

const ipdPricingRule = new PricingRule('ipd',
  (itemCount: number) => {
    const packageSize = 4
    const price = 549.99
    const bargainPrice = 499.99
    return itemCount > packageSize ? itemCount * bargainPrice : itemCount * price
  })

const pricingRules = [atvPricingRule, ipdPricingRule]

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