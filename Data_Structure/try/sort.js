const merged = (array1, array2) => {
    let mergedArray = []
    let arr1 = array1[0]
    let arr2 = array2[0]
    let i = 1
    let j = 1

    if(array1.length===0){
        return array2
    }
    if(array2.length===0){
        return array1
    }

    while(arr1 || arr2){
        if(!arr2 || arr1 < arr2){
            mergedArray.push(arr1)
            arr1 = array1[i]
            i++
        }else{
            mergedArray.push(arr2)
            arr2 = array2[j]
            j++
        }
    }

    return mergedArray;
}


console.log(merged([2,3,4,8,30,40], [4,6,8,9,60]))