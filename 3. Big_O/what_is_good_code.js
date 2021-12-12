// Good code must br
// * Readable and * Scalable
//  Scalabilty is knowing how much time it takes your algorithm to run and how much memory it takes.(Memory - Space Complexity and Speed - Time Complexity)
// Big O is used to decsribe how efficient we can run our code




// const {performance} = require('perf_hooks');

const nemo = ["nemo"]
const everyone = ["Dory", "Bruce", "Marlin", "nemo", "Gill", "Bloat", "Nigel", "Squirt", "Darla", "Hank"]
const large = new Array(100000).fill("nemo");

function findNemo(array){
    // let t0 = performance.now();
    for(let i = 0; i < array.length; i++){
        console.log("running")
        if(array[i] === 'nemo'){
            console.log("Found NEMO!")
            break;
        }
    }
    // let t1 = performance.now();
    // console.log(`call to find nemo took ${(t1-t0)} Milliseconds`)
}


findNemo(everyone)     // O(n) --> Linear Time, where n is the number of element or item.


// const boxes = [0,1,2,3,4,5]
// function logFirstTwoBoxes(boxes){
//     console.log(boxes[0]);  //O(1)
//     console.log(boxes[1]);  //O(1)
// }

// logFirstTwoBoxes(boxes) // O(2)


