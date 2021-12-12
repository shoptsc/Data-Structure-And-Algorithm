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
        };
        this.tail = this.head;
        this.length = 1;
    }

    printValue() {
        let counter = this.head;
        const output = [];
        while (counter !== null) {
            output.push(counter.value)
            counter = counter.next
        }
        return output;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode
        this.length++
            return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head
        this.head = newNode;
        this.length++
            return this;
    }

    addItem(index, value) {
        const newNode = new Node(value);
        if (index >= this.length) {
            return this.append(value)
        }
        const ladder = this.transverseIndex(index - 1)
        const holder = ladder.next
        ladder.next = newNode
        newNode.next = holder
        this.length++
            return this;
    }

    transverseIndex(index) {
        let counter = 0;
        let newElement = this.head;
        while (counter !== index) {
            newElement = newElement.next;
            counter++
        }
        return newElement;
    }

    delete(index) {
        const ladder = this.transverseIndex(index - 1)
        const holder = ladder.next
        ladder.next = holder.next
        this.length--
            return this;
    }

    reverse() {
        let first = this.head;
        this.tail = this.head;
        let second = first.next
        while (second) {
            const temp = second.next
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null
        this.head = first
        return this;
    }

}


newlist = new LinkedList(10)
newlist.prepend(2)
newlist.prepend(1)
newlist.append(20)
newlist.append(30)
    // newlist.addItem(2, "a")
    // newlist.addItem(3, "c")
    // newlist.addItem(4, "d")
    // newlist.addItem(25, "e")
    // newlist.delete(4)
newlist.reverse();
console.log(newlist.printValue())