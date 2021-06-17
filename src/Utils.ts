import Item from './Item'
export interface Accumulator {
    total: number
    leftItems: Item[]
    context: Context
}

interface Context {
    items: Item[] 
}

export type ItemTotalFunction = (itemCount: number, context: Context) => number