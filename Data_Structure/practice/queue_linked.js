class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const queues = new Queue;
queues.push(10)
queues.push(20)
queues.push(30)
queues.push(40)
queues.pop();
queues.pop();
queues.pop();
queues.pop();
console.log(queues);