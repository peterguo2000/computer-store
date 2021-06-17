import Checkout from '../src/Checkout'
import Item from '../src/Item'
import pricingRules from '../src/PricingRules'
const item1 = new Item('ipd', 'Super iPad', 549.99)
const item2 = new Item('mbp', 'MacBook Pro', 1399.99)
const item3 = new Item('atv', 'Apple TV', 109.50)
const item4 = new Item('vga', 'VGA adapter', 30.00)

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

it("should return correct value for one free vga", () => {
    checkout.clear()
    checkout.scan(item2)
    checkout.scan(item4)
    expect(checkout.total()).toBe(1399.99)
})

it("should return correct value when mbp > vga", () => {
    checkout.clear()
    checkout.scan(item2)
    checkout.scan(item2)
    checkout.scan(item2)
    checkout.scan(item4)
    checkout.scan(item4)
    expect(checkout.total()).toBe(4199.97)
})


it("should return correct value when mbp < vga", () => {
    checkout.clear()
    checkout.scan(item2)
    checkout.scan(item2)
    checkout.scan(item4)
    checkout.scan(item4)
    checkout.scan(item4)
    expect(checkout.total()).toBe(2829.98)
})