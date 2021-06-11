import Checkout from '../src/Checkout'
import Item from '../src/Item'
import PricingRule from '../src/PricingRule'
const item1 = new Item('ipd', 'Super iPad', 549.99)
const item2 = new Item('mbp', 'MacBook Pro', 1399.99)
const item3 = new Item('atv', 'Apple TV', 109.50)
const item4 = new Item('vga', 'VGA adapter', 30.00)
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

const checkout = new Checkout(pricingRules)

it("should return $249.00 for atv", () => {
    checkout.scan(item3)
    checkout.scan(item3)
    checkout.scan(item3)
    checkout.scan(item4)
    expect(checkout.total()).toBe(249.00)
})

it("should return $2718.95 for ipd", () => {
    checkout.clear()
    checkout.scan(item3)
    checkout.scan(item1)
    checkout.scan(item1)
    checkout.scan(item3)
    checkout.scan(item1)
    checkout.scan(item1)
    checkout.scan(item1)
    expect(checkout.total()).toBe(2718.95)
})

it("should return $4337.94 for mix", () => {
    checkout.clear()
    checkout.scan(item3)
    checkout.scan(item1)
    checkout.scan(item1)
    checkout.scan(item3)
    checkout.scan(item1)
    checkout.scan(item1)
    checkout.scan(item1)
    checkout.scan(item3)
    checkout.scan(item3)
    checkout.scan(item3)
    checkout.scan(item2)
    expect(checkout.total()).toBe(4337.94)
})