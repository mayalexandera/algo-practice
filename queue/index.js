// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = []
  }
  add(n) {
    // console.log(this.unshift(n))
    return this.data.unshift(n)
  }
  remove(n) {
    // console.log(this.pop(n))
    return this.data.pop(n)
  }
}

module.exports = Queue;
