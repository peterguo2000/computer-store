import Item from './Item'
export interface Accumulator {
    total: number
    leftItems: Item[]
}

export type ItemTotalFunction = (itemCount: number) => number