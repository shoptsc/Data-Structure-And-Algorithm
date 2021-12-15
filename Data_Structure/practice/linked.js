class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let currentNode = this.head
        let array = [];
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
            return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(value, index) {
        const newNode = new Node(value);
        let leader = this.traverseToIndex(index - 1);
        let holdPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdPointer;
        this.length++;
        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }

    remove(index) {
        let leader = this.traverseToIndex(index - 1);
        let unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this;
    }

    reverse() {
        let first = this.head;
        let second = first.next;
        this.tail = this.head;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }

}

const linkedList = new LinkedList("Google");
linkedList.append("Discord");
linkedList.prepend("Twiiter")
linkedList.prepend("Facebook")
linkedList.insert("Instagram", 1)
linkedList.remove(3)
console.log(linkedList.printList());
console.log(linkedList.reverse().printList());