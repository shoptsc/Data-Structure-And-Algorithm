const firstRecurringCharacter = (input) =>{
    let map = {}
    for(let i = 0; i < input.length; i++){
        if(map[input[i]]){
            return input[i]
        }else{
            map[input[i]] = i
        }
    }
    
    return undefined
    // for(let i = 0; i < input.length; i++){
    //     for( j = i+1; j < input.length; j++){
    //         if(input[i] === input[j]){
    //             return input[i]
    //         }
    //     }
    // }
    // return undefined;
}


console.log(firstRecurringCharacter([3,1,2,0,6,5,2,1,2,3,5,5,1,2,4]))
// console.log(firstRecurringCharacter([1,2,34,56,1,2,78,72,34,5,5,6,2,3]))
