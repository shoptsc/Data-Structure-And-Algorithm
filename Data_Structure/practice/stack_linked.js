class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null
        this.buttom = null
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.top === null) {
            this.top = newNode;
            this.buttom = newNode
        } else {
            let currentNode = this.top;
            this.top = newNode;
            this.top.next = currentNode
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        if (this.top === this.buttom) {
            this.buttom = null
        }
        this.top = this.top.next;
        this.length--;
        return this;


    }
}

const stack = new Stack;
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop();
stack.pop();
stack.pop();
console.log(stack)