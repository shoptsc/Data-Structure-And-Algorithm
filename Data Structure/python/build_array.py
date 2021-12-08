class MyArray:
    def __init__(self):
        self.length = 0
        self.data = {}

    def get(self, index):
        return self.data[index]

    def push(self, item):
        self.data[self.length] = item
        self.length += 1
        return self.length

    def pop(self):
        lastItem = self.data[self.length-1]
        del self.data[self.length-1]
        self.length -= 1
        return lastItem

    def delete(self, index):
        item = self.data[index]
        self.shiftItem(index)
        return item

    def shiftItem(self, index):
        for i in range(index,self.length-1):
            self.data[i] = self.data[i+1]
        del self.data[self.length-1]
        self.length -= 1



newArray = MyArray()
newArray.push("Hi")
newArray.push("I am")
newArray.push("Sanusi")
newArray.push("hamed")
newArray.push("tijani")
newArray.push("firdaus")
newArray.push("subomi")
newArray.push("segun")
# newArray.pop()
newArray.delete(6)
print(newArray.data)