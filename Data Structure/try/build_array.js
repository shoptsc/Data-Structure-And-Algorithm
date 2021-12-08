class BuildArray{
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index){
        return this.data[index]
    }

    push(value){
        this.data[this.length] = value
        this.length++
        return this.length
    }

    pop(){
        const lastItem = this.data[this.length-1]
        delete(this.data[this.length-1])
        this.length--
        return lastItem
    }

    // add(value, index){
    //     for(let i = index; i < this.length; i++){
    //         this.data[i+1] = this.data[i]
    //     }
    //     this.data[index] = value
        
    //     this.length++
    //     return this.length
    // }

    delete(index){
        const currentitem = this.data[index]
        this.shiftIndex(index)
        return currentitem
    }

    shiftIndex(index){
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1]
        }
        delete(this.data[this.length-1])
        this.length--
    }


}


const newArray = new BuildArray()
newArray.push(10)
newArray.push(5)
newArray.push(15)
newArray.pop()
newArray.push(25)
newArray.push(35)
newArray.push(45)
newArray.push(55)
newArray.delete(3)
// newArray.add(70, 2)
console.log(newArray)



