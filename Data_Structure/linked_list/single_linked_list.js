// 10-->5-->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
            return this;
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
            return this;
    }

    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }

    insert(index, value) {
        // check params
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value)
        const leader = this.traverseToIndex(index - 1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++
            return this.printList()
    }

    traverseToIndex(index) {
        // check params
        let counter = 0;
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length--;
        return this.printList()
    }

    reverse() {
        if (!this.head.next) {
            return this.head
        }
        let first = this.head;
        // console.log(first)
        this.tail = this.head
            // console.log(this.tail)
        let second = first.next
            // console.log(second)
        while (second) {
            const temp = second.next;
            // console.log(temp);
            second.next = first;
            // console.log(second.next)
            first = second;
            // console.log(first)
            second = temp;
            // console.log(second)
        }
        this.head.next = null
        this.head = first
        console.log(this.head)
        return this.printList()
    }
}



const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.printList()
myLinkedList.reverse()
    // myLinkedList.remove(4)
    // console.log(myLinkedList.printList())