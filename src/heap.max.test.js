const Heap = require("./heap");

function getHeap() {
  return new Heap({
    comparator: ({ winner, loser }) => winner > loser,
  });
}

describe("heap", () => {
  describe("when set for max heap", () => {
    describe("push", () => {
      it("should be able to push a value and then see that value as the top", () => {
        const heap = getHeap();

        heap.push(1);

        expect(heap.peek()).toBe(1);
      });

      it(`should be able to push a value, then a greater value, 
      and then see that greater value as the top`, () => {
        const heap = getHeap();

        heap.push(1);
        heap.push(2);
        expect(heap.peek()).toBe(2);
      });

      it(`should be able to push a value, 
then a greater value, 
and then see that greater value as the top`, () => {
        const heap = getHeap();

        const greatestNumber = 10;

        for (let i = 1; i <= greatestNumber; i++) {
          heap.push(i);
        }

        expect(heap.peek()).toBe(greatestNumber);
      });
    });

    describe("pop", () => {
      it("should return null when nothing in the heap", () => {
        const heap = getHeap();

        expect(heap.pop()).toBe(null);
      });

      it("should return last item when one item in the heap", () => {
        const heap = getHeap();

        const greatestNumber = 10;

        for (let i = 0; i <= greatestNumber; i++) {
          heap.push(i);
        }

        for (let i = greatestNumber; i >= 0; i--) {
          expect(heap.pop()).toBe(i);
        }
      });
    });
  });
});
