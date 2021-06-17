import PricingRule from "./PricingRule"

const defaultItemTotalFunction =  (itemCount: number, price: number) => {
    return itemCount * price
}

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

const mpbPricingRule = new PricingRule('mbp', 
    (itemCount) => defaultItemTotalFunction(itemCount, 1399.99))

const vgaPricingRule = new PricingRule('vga', 
    (itemCount, context) => {
        const mbpCount = context.items.filter(item => item.sku === 'mbp').length;
        const freeCount = Math.min(mbpCount, itemCount)
        return (itemCount - freeCount) * 30.00
    })

const pricingRules = [atvPricingRule, ipdPricingRule, mpbPricingRule, vgaPricingRule]
export default pricingRules