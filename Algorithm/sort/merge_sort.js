const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    let length = array.length;
    const middle = Math.floor(length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )

}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


console.log(mergeSort(numbers));