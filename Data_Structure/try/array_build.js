// class MyArray{
//     constructor(){
//         this.length = 0;
//         this.data = {}
//     }

//     get(index){
//         return this.data[index]
//     }

//     push(value){
//         this.data[this.length] = value
//         this.length++
//         return this.data
//     }

//     pop(){
//         const prevData = this.data[this.length-1];
//         delete this.data[this.length-1]
//         this.length--
//         return prevData
//     }

//     delete(index){
//         const newData = this.data[index]
//         this.shiftData(index)
//         return newData;
//     }

//     shiftData(index){
//         for(let i = index; i < this.length-1; i++){
//             this.data[i] = this.data[i+1]
//         }
//         delete this.data[this.length-1]
//         this.length--
//         return this.data
//     }
// }


// const newArray = new MyArray();
// newArray.push(3)
// newArray.push(5)
// newArray.push(7)
// newArray.push(9)
// newArray.push(11)
// // newArray.pop()
// newArray.delete(3)
// console.log(newArray)




let a = {
    b:[1,2,3,4,55,6],
    d:[34,5,6,7,8,9]
}
console.log(a["d"])
