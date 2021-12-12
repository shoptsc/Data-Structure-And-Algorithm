function boooo(n){
    for(let i = 0; i < n.length; i++){
        console.log("Booooooo")
    }
}


boooo([1,2,3,4,5])  //Space complexity of O(1)


function arrayOfHiNtimes(n){
    let hiArray  = [];
    for(let i = 0; i < n; i++){
        hiArray[i] = "hi"
    }
    console.log(hiArray) 
}

arrayOfHiNtimes(6)  //Space complexity of O(n)