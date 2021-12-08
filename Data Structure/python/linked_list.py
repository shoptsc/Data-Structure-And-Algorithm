       
class MyLinkedList:
    def __init__(self, value):
        self.head = {
            "value" : value,
            "next" : None
        }
        self.tail = self.head
        self.length = 1

    def append(self, value):
        newNode = {
            "value": value,
            "next": None
        }
        self.tail["next"] = newNode
        self.tail = newNode
        self.length += 1
        return self

    def prepend(self, value):
        newNode = {
            "value": value,
            "next": None
        }
        newNode["next"] = self.head
        self.head = newNode
        self.length += 1
        return self

    def insert(self, index, value):
        if(index >= self.length):
            return self.append(value)
        
        newNode = {
            "value" : value,
            "next" : None
        }
        leader = self.traverseToIndex(index-1)
        holdingPointer = leader["next"]
        leader["next"] = newNode
        newNode["next"] = holdingPointer
        self.length += 1
        
    
    def traverseToIndex(self,index):
        # check params
        counter = 0
        currentNode = self.head
        while(counter != index):
            currentNode = currentNode["next"]
            counter += 1
        
        return currentNode



newList = MyLinkedList(10)
# newList.prepend(15)
# newList.prepend(30)
newList.append(20)
newList.append(5)
# newList.insert(3,17)
# newList.insert(5,24)
# newList.insert(9, 65)
print(newList.head)
print(newList.length)

