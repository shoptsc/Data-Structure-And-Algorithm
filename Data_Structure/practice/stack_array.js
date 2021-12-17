class Stack {
    constructor() {
        this.array = {};
        this.length = 0
    }

    peek() {
        return this.array[this.length - 1]
    }

    push(value) {
        this.array[this.length] = value;
        this.length++;
        return this;
    }

    pop() {
        delete this.array[this.length - 1];
        this.length--
            return this;
    }
}


const stack = new Stack;
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop()
console.log(stack)