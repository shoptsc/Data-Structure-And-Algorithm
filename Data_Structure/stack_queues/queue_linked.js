class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
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
            this.first = newNode
            this.last = newNode
        } else {
            // const holdPointer = this.first
            this.last.next = newNode
            this.last = newNode;
            // this.top.next = holdPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const holdPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return this;
    }
}


const myStack = new Stack();
myStack.push("google")
myStack.push("udemy")
myStack.push("discord")
    // myStack.pop()
    // myStack.pop()
    // myStack.pop()
console.log(myStack)