function reverse(str){
    if(!str || str.length < 2 || typeof str !== "string"){
        return "hmm that is not good"
    }
    const alpha = []
    for (i = str.length-1; i >= 0; i--){
        alpha.push(str[i])
    }
    return alpha.join("")
}

const reverse2 = str => str.split("").reverse().join("")

const reverse3 = str => [...str].reverse().join("")

console.log(reverse("Hi My name is Andrei"))
console.log(reverse2("Hi My name is Andrei"))
console.log(reverse3("Hi My name is Andrei"))