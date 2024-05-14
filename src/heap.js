class Heap {

    constructor({
        comparator
    }) {
        this.list = [null]
        this.comparator = comparator
    }

    push(val) {
        
        this.list.push(val)

        for(
            let childIndex = this.list.length - 1,
                parentIndex = Math.floor(childIndex / 2),
                child = this.list[childIndex],
                parent = this.list[parentIndex]; 
            
            childIndex > 1 && 
            !this.comparator({
                child, parent
            });

            childIndex = Math.floor(childIndex / 2),
            parentIndex = Math.floor(parentIndex / 2),
            child = this.list[childIndex],
            parent = this.list[parentIndex]
        ) {
            
            // swap parent and child
            this.list[parentIndex] = child
            this.list[childIndex] = parent
        }        
    }

    peek() {
        return this.list[1]
    }
}

module.exports = Heap;