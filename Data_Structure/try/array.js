class CreateArray{
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(){
        return this.data
    }

    push(value){
        this.data[this.length] = value
        this.length++
        return this.data
    }

    pop(){
        const newData = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return newData
    }

    delete(index){
        const newData = this.data[index]
        this.remove(index)
        return newData
    }

    remove(index){
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length-1]
        this.length--
        return this.length
    }
}



const newArray = new CreateArray()
newArray.push(1)
newArray.push("a")
newArray.push("b")
newArray.push('c')
newArray.push("d")
newArray.push('e')
newArray.push('f')
// newArray.pop()
// newArray.pop()
newArray.delete(3)
console.log(newArray)