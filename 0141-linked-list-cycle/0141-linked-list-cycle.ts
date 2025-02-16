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

function hasCycle(head: ListNode | null): boolean {
    // next pointer가 리스트에 있는 노드를 가리키는지
    // 가리키면 true, 아니면 false
    // pos는 next pointer의 tail node의 index

    // 사이클이라는 걸 어떻게 알 수 있을까?
    // tail의 증거는 next가 null인 걸로 알 수 있음
    // 근데 사이클은 모든 next에 ListNode가 존재
    // 그냥 계속 도는 코드가 될 수 있는데..
    // 비교를 하려면 비교하려는 노드가 있어야 비교를 할 수 있지않을까..
    // ..방문했다는 표식해보기.

    let currentNode = head;
    const visited = new Set();

    while(currentNode) {
        if (visited.has(currentNode)) {
            return true;
        }

        visited.add(currentNode);
        currentNode = currentNode.next;
    }

    return false;
};