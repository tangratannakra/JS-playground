// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

class Stack {
    constructor(...data) {
        this.sData = [...data];
    }

    push(el) {
        this.sData.push(el);
    }
    pop() {
        return this.sData.pop();
    }

    peek() {
        return this.sData[this.sData.length - 1];
    }
}

class Queue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    add(el) {
        this.s1.push(el);
    }

    remove() {
        while (this.s1.peek()) {
            this.s2.push(this.s1.pop());
        }

        const el = this.s2.pop(); // pop one element then look inside stack 2
        while (this.s2.peek()) {
            this.s1.push(this.s2.pop());
        }

        return el;
    };

    peek() {
        while (this.s1.peek()) {
            this.s2.push(this.s1.pop());
        }

        const el = this.s2.peek(); // pop one element then look inside stack 2
        while (this.s2.peek()) {
            this.s1.push(this.s2.pop());
        }

        return el;
    };
}