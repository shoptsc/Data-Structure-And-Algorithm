class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail;
        this.tail.next = newNode
        this.tail = newNode
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value);
        let leader = this.traverseToIndex(index - 1);
        let follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        let follower = unwantedNode.next;
        leader.next = follower;
        follower.prev = leader;
        this.length--;
        return this;
    }

}

const list = new DoublyLinkedList("google");
list.append("Instagram");
list.prepend("Twiiter")
list.prepend("discord")
list.insert(1, "udemy")
list.remove(1)
console.log(list)