class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class LinkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null
        };
        this.tail = this.head;
        this.length = 1;
    };

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    append(value){
        const newnode = new Node(value)
        this.tail.next = newnode
        this.tail = newnode;
        this.length++;
        return this.printList();
    }

    prepend(value){
        const newnode = new Node(value);
        newnode.next = this.head
        this.head = newnode;
        this.length++;
        return this.printList()
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value)
        }
        const newnode = new Node(value);
        const start = this.readindex(index-1)
        const saveData = start.next
        start.next = newnode
        newnode.next = saveData
        this.length++
        return this.printList()
    }

    readindex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }

    delete(index){
        const start = this.readindex(index-1);
        const saveData = start.next;
        start.next = saveData.next;
        this.length--;
        return this.printList();
    }
}


const newList = new LinkedList(10);
newList.prepend(2)
newList.prepend(1)
newList.append(20)
newList.append(30)
newList.insert(2, 3)
newList.insert(3, 4)
newList.delete(5)
console.log(newList.printList());