// const boxes = [1, 2, 3, 4, 5, 6, 7, 8];

// const logAllPairs = function(array, tnum){
//     for(e of tnum){
//         for(let i = 0; i < array.length; i++){
//             for(let j = i+1; j < array.length; j++){
//                 for(let k = j+1; k < array.length; k++){
//                     for(let l = k+1; l < array.length; l++){
//                         newArray = [array[i], array[j], array[k], array[l]]
//                         sum = array[i] + array[j] + array[k] + array[l]
//                         ord = {pair: newArray, total:sum}
//                         if(sum === e){
//                             console.log(newArray)
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// logAllPairs(boxes, [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])



// const rank = (data) =>{
//     for(i of data){
//         for(j of data){
//             for(k of data){
//                 for(l of data){
//                     for (m of data){
//                         v = [i, j, k, l, m]
//                         console.log(v)
//                     }
//                 }
//             }
//         }
//     }
// }


// rank(["-", "+"])



function check(arr1, arr2){
    let show = {}
    for(let i = 0; i < arr1.length; i++){
        if(!show[arr1[i]]){
            const item = arr1[i];
            show[item] = true
           
        }
    }
    console.log(show)
}

console.log(check(['a', 'b', 'c', 'd'], ['x', 'y', 'a']))