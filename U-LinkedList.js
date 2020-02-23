class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const node = new Node(data, this.head); //this.head is the whatever is set when now is in this.head
        //if nothing is set, the this head will be null; if is a pointer to head, it will take the pointer;
        //it will be the next node in line;

        this.head = node; //seting the this.head to point to THIS new node.
        //this.head = new Node(data, this.head);
    }

    getLast() {
        if (!this.head) return null;
        else {
            let node = this.head;
            while (node) {
                if (!node.next) {
                    return node;
                }
                node = node.next;
            }
        }
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;
        let node = this.head;
        this.head = node.next;
        //this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return; //no node;
        if (this.head.next == null) { //the pointer to the FIRST elemens points to NEXT with pointer to null => only one element;
            this.head = null;
            return;
        }
        //more than one node;
        let node = this.head.next; //second node
        let prev = this.head; //the firs node

        while (node.next) {
            prev = node;
            node = node.next;
        }

        prev.next = null; //at the and of while loop, prev is the node before the end, so we set it's pointer to null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            //no Last, so there are NO elemens, create first one
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let node = this.head; //if there is NO element, this.head = null;
        let counter = 0;

        while (node) {
            if (counter === index) {
                return node;
            } else {
                counter++;
                node = node.next;
                //still searching for the index
            }
        }

        return null; //no index is found
    }

    removeAt(index) {
        if (!this.head) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const prev = this.getAt(index - 1);

        if (!prev || prev.next) return;
        prev.next = prev.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, prev.next);
        prev.next = node;
    }

}

const testList = new LinkedList();
testList.insertFirst(4);
testList.insertFirst(3);
testList.insertFirst(2);
testList.insertFirst(1);
console.log(testList);


function midpoint(list) {
    let slow = list.head;
    let fast = list.head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function circularList(list) {
    let slow = list.head;
    let fast = list.head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true; //circular list

        return false;
    }
}

function reverseList(list) {
    let head = list.head;
    if (!head) {
        return head;
    }

    let current = head.next; //head.next
    let node = head; //head
    node.next = null;

    while (current) {
        let temp = current;
        current = current.next
        temp.next = node;
        node = temp;
    }

    return node;
}


console.log(midpoint(testList))
console.log(circularList(testList))
console.log(reverseList(testList));


// const list = new LinkedList();
// list.head = new Node('LastData10');
// list.insertFirst('First Node');
// list.getLast();

// console.log(list.size());