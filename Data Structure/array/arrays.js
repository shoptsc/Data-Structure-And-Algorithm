const strings = ["a", "b", "c", "d"];

// push
strings.push("e") // O(1)

// pop
strings.pop();  // O(1)
strings.pop();

// unshift
strings.unshift("x");   // O(n)

// splice
strings.splice(2, 0, "alien")   //O()


console.log(strings)


// Static and Dynamic array
// Static array have a fixed amount of element
// Dynamic array doesn't