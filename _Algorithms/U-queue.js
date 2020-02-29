// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.


class Queue {
    constructor(...arr) {
        this.queueDataHolder = [...arr];
    }

    add(inputData) {
        this.queueDataHolder.unshift(inputData);
    }

    remove() {
        return this.queueDataHolder.pop()
    }

    peek() {
        return this.queueDataHolder[this.queueDataHolder.length - 1];
    }
}
const q1 = new Queue(1, 2, 3);
const q2 = new Queue('hi', 'there');

function weave(q1, q2) {
    const que = new Queue();
    while (q1.peek() || q2.peek()) {
        if (q1.peek()) {
            que.add(q1.remove())
        }

        if (q2.peek()) {
            que.add(q2.remove());
        }
    }

    return que;
}

console.log(weave(q1, q2));