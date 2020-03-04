// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. 
// The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

/**
 * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var getDecimalValue = function (head) {
    if (head.next === null || head.next === 0) return 0;

    let data = '';
    let node = head;

    while (node) {
        console.log(data)
        data += node.val;
        node = node.next;
    }

    return parseInt(head, 2)

};
console.log(getDecimalValue([1, 0, 1]))
// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10

// Example 2:
// Input: head = [0]
// Output: 0

// Example 3:
// Input: head = [1]
// Output: 1

// Example 4:
// Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
// Output: 18880