/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let bucket = 0;
    let currentL1Node = l1;
    let currentL2Node = l2;

    const result = new ListNode();
    let currentResultNode = result;

    while (currentL1Node !== null || currentL2Node !== null) {
        const sum = (currentL1Node ? currentL1Node.val : 0) + (currentL2Node ? currentL2Node.val : 0);
 
        if (sum + bucket < 10) {
            if (bucket > 0) {
                currentResultNode.next = new ListNode(sum + bucket);
                bucket = 0;
            } else {
                currentResultNode.next = new ListNode(sum);
            }
        } else {
            if (bucket === 0) {
                const splited = String(sum).split('').map(str => Number(str));
                bucket = splited[0];
                currentResultNode.next = new ListNode(splited[1]);
            } else {
                const splited = String(sum + bucket).split('').map(str => Number(str));
                bucket = splited[0];
                currentResultNode.next = new ListNode(splited[1]);
            }
        }

        currentL1Node = currentL1Node ? currentL1Node.next : null;
        currentL2Node = currentL2Node ? currentL2Node.next : null;
        currentResultNode = currentResultNode.next;
    }

    if (bucket > 0) {
        currentResultNode.next = new ListNode(bucket);
    }

    return result.next;
};