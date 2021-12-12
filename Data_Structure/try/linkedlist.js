class Node{
    constructor(value){
            this.value = value,
            this.next = null
    }
}

class LinkedList{
    constructor(value){
        this.length = 1
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head
    }

    append(value){
        const node = new Node(value)
        this.tail.next = node
        this.tail = node
        this.length++
    }

    prepend(value){
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this.length++
    }

    printList(){
        const array = []
        let currentNode = this.head
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }

    addNode(index, value){
        const node = new Node(value)
        if(index >= this.length){
            return this.append(value)
        }
        const ladder = this.tranverseToIndex(index-1)
        const holdingPointer = ladder.next
        ladder.next = node
        node.next = holdingPointer
        this.length++
        return this.printList();
    }

    tranverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode;
    }

    remove(index){
        const ladder = this.tranverseToIndex(index-1)
        const unwantedNode = ladder.next
        ladder.next = unwantedNode.next
        this.length--
        return this.printList()
    }
}


const newList = new LinkedList(10)
// newList.prepend(2)
// newList.prepend(4)
newList.append(15)
newList.append(20)
newList.append(25)
newList.append(30)
newList.addNode(10, "a")
newList.addNode(10, "b")
newList.remove(4)
console.log(newList.printList())