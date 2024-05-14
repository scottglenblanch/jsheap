module.exports = class Heap {

    
    constructor({
        comparator
    }) {
        this.list = [null]
        this.comparator = comparator
    }

    push(val) {
        
        this.list.push(val)

        for(
            let i = this.list.length - 1; 
            
            i > 1 && 
            !this.comparator({
                parent: this.list[Math.floor(i /2)],
                child: this.list[i]
            });

            i = Math.floor(i / 2)
        ) {
            const parentNowChild = this.list[i]
            const childNowParent = this.list[Math.floor(i / 2)]

            // swap
            this.list[i] = childNowParent
            this.list[Math.floor(i / 2)] = parentNowChild
        }        
    }

    peek() {
        return this.list[1]
    }
}
