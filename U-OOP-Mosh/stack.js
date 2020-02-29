class Stack {
    _holder = []

    constructor() {

    }

    get count() {
        if (this._holder == 0) throw new Error('Empty Stack');
        return 'Stack size is ' + this._holder.length;
    }

    push(item) {
        this._holder.push(item);
    }

    peek() {
        if (this._holder == 0) throw new Error('Empty Stack');
        return this._holder[this._holder.length - 1];
    }

    pop() {
        if (this._holder == 0) throw new Error('Empty Stack');
        this._holder.pop();
    }
}

const stack = new Stack();
// stack.push('a');
// stack.push("b");

// console.log(stack.peek());
// console.log(stack.count);
// stack.pop();
// console.log(stack.count);