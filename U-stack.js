// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor(...arr) {
        this.stackData = [...arr];
    }

    push(el) {
        this.stackData.push(el);
    };

    pop() {
        return this.stackData.pop()
    };

    peek() {
        return this.stackData[this.stackData.length - 1];
    };
}