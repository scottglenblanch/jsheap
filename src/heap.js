class Heap {
  constructor({ comparator }) {
    this.list = [null];
    this.comparator = comparator;
  }

  peek() {
    return this.list[1];
  }

  pop() {
    const res = this.list?.[1] ?? this.list[0];

    this.#percolateDown();

    return res;
  }

  push(val) {
    this.list.push(val);
    this.#percolateUp();
  }

  #percolateDown() {
    const lastItem = this.list[this.list.length - 1];
    // make last item the first item and then percolate down
    this.list[1] = lastItem;

    // remove the last item
    this.list = this.list.slice(0, this.list.length - 1);

    for (let i = 1; i < this.list.length / 2; ) {
      const leftChildIndex = 2 * i;
      const rightChildIndex = leftChildIndex + 1;

      const currentValue = this.list[i];
      const leftChildValue = this.list[leftChildIndex];
      const rightChildValue = this.list[rightChildIndex];

      const isRightInBounds = rightChildIndex < this.list.length;
      const isRightWinOverLeft =
        isRightInBounds &&
        this.comparator({ winner: rightChildValue, loser: leftChildValue });
      const isRightWinOverCurrent =
        isRightInBounds &&
        !this.comparator({ winner: currentValue, loser: rightChildValue });

      // left will always be in bounds
      const isLeftWinOverCurrent = !this.comparator({
        winner: currentValue,
        loser: leftChildValue,
      });

      const isSwapRightChild = isRightWinOverLeft && isRightWinOverCurrent;
      const isSwapLeftChild = !isRightWinOverLeft && isLeftWinOverCurrent;
      const isTerminate = !isSwapLeftChild && !isSwapRightChild;

      const childIndex = isSwapRightChild ? rightChildIndex : leftChildIndex;

      const childValue = this.list?.[childIndex];

      if (isTerminate) {
        break;
      }

      this.list[i] = childValue;
      this.list[childIndex] = currentValue;

      i = childIndex;
    }
  }

  #percolateUp() {
    for (
      let childIndex = this.list.length - 1,
        parentIndex = Math.floor(childIndex / 2),
        child = this.list[childIndex],
        parent = this.list[parentIndex];
      // continue statement
      childIndex > 1 &&
      !this.comparator({
        winner: parent,
        loser: child,
      });
      // updates after each loop
      childIndex = Math.floor(childIndex / 2),
        parentIndex = Math.floor(parentIndex / 2),
        child = this.list[childIndex],
        parent = this.list[parentIndex]
    ) {
      // swap child and parent
      this.list[parentIndex] = child;
      this.list[childIndex] = parent;
    }
  }
}

module.exports = Heap;
