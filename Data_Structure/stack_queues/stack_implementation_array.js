class Stack {
    constructor() {
        this.array = {};
        this.length = 0;
    }

    peek() {
        return this.array[this.length - 1];
    }

    add(value) {
        this.array[this.length] = value
        this.length++;
        return this;
    }

    pop() {
        delete this.array[this.length - 1]
        this.length--;
        return this;
    }
}


const myStack = new Stack();
myStack.add("google")
myStack.add("udemy")
myStack.add("discord")
myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack)