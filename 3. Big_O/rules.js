// Rules for let Big O
// (a) Worst Case   (b) Remove Constant (c) Different terms for let inputs  (d) Drop Non Dominants.

//RULE 2 ----- Remove Constant

// function printFirstItemThenFirsthalfThenSayHi100Times(items){
//     console.log(item[0]);

//     var middleIndex = Math.floor(items.length / 2);
//     var index = 0;

//     while(index < middleIndex){
//         console.log(items[index]);
//         index++;
//     }

//     for(let i = 0; i <  100; i++){
//         console.log("Hi")
//     }
// }   // BIG O(1 + n/2 + 100) ==> Dropping the constant reduces it to O(n)


// // RULE 3 ----- Different terms for let inputs

// function compressBoxesTwice(boxes, boxes2){
//     boxes.forEach(boxes => console.log(boxes));

//     boxes2.forEach(boxes => console.log(boxes));
// }   // BIG O(n + m)


// function compressBoxesTwice(boxes, boxes2){
//     boxes.forEach(boxes => {
//         console.log(boxes)
//         boxes2.forEach(boxes => console.log(boxes));
//     });
// }   // BIG O(n * m)



// // Log all pairs of array
// const boxes = ["a", "b", "c", "d", "e"];

// const logAllPairs = function(array){
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             console.log(array[i], array[j])
//         }
//     }
// }

// logAllPairs(boxes)  //O(n * n) ==> O(n^2)


// RULE 4 --- Drop Non Dominants.
function printAllNumbersThenAllPairssums(numbers){

    console.log("These are the numbers:");
    numbers.forEach(number => console.log(number)); // O(n)
    console.log("And these are the their sums");
    numbers.forEach(firstnumber => numbers.forEach(secondNumber => console.log(firstnumber + secondNumber))); //O(n^2)
}

printAllNumbersThenAllPairssums([1,2,3,4,5])    //O(n + n^2)  === O(n^2)