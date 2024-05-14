const Heap = require('./heap');

describe('heap', () => {
    it('should be able to push a value and then see that value as the top', () => {
        const heap = new Heap({
            comparator: ({ parent, child }) => (parent > child)
        })

        heap.push(1)

        expect(heap.peek()).toBe(1)
    })

    it(`should be able to push a value, 
        then a greater value, 
        and then see that greater value as the top`, () => {
        const heap = new Heap({
            comparator: ({ parent, child }) => (parent > child)
        })

        heap.push(1)
        heap.push(2)
        expect(heap.peek()).toBe(2)
    })

    it(`should be able to push a value, 
        then a greater value, 
        and then see that greater value as the top`, () => {
        const heap = new Heap({
            comparator: ({ parent, child }) => (parent > child)
        })

        const greatestNumber = 10

        for(let i = 1; i <= greatestNumber; i++) {
            heap.push(i)
        }

        expect(heap.peek()).toBe(greatestNumber)
    })
    
})