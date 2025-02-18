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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // 모두 오름차순으로 정렬된 리스트
    // 두 리스트를 오름차순으로 정렬한 하나의 리스트로 반환
    // 둘다 순회를 해야한다.

    // (1)_1 (2)_1 비교
    // (1)_2 (2)_1 비교
    // (1)_2 (2)_3 비교
    // (1)_4 (2)_3 비교
    // (1)_4 (2)_4 비교
    // (1)_null (2)_4 비교
    // (1)_null (2)_null 이면 리턴

    const mergedList = new ListNode();
    let cur = mergedList;
    let onePointer = list1;
    let twoPointer = list2;

    while(onePointer && twoPointer) {
        if (onePointer.val <= twoPointer.val) {
            cur.next = new ListNode(onePointer.val);
            onePointer = onePointer.next;
        } else {
            cur.next = new ListNode(twoPointer.val);
            twoPointer = twoPointer.next;
        }

        cur = cur.next;
    }

    while(onePointer) {
        cur.next = new ListNode(onePointer.val);
        onePointer = onePointer.next;
        cur = cur.next;
    }

    while(twoPointer) {
        cur.next = new ListNode(twoPointer.val);
        twoPointer = twoPointer.next;
        cur = cur.next;
    }

    return mergedList.next;
};