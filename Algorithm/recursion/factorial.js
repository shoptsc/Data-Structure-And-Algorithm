function findFactorialRecursive(number) {
    if (number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1);

}

function findFactorialIterative(number) {
    // const array = [];
    // for (let i = number; i > 0; i--) {
    //     array.push(i)
    // }
    // sum = array.reduce((arg, arr) => arg * arr)
    // return sum;
    let answer = 1;
    if (number === 2) {
        answer = 2;
    }
    for (let i = 2; i <= number; i++) {
        answer = answer * i
    }
    return answer;
}

console.log(findFactorialRecursive(2));
console.log(findFactorialIterative(5));