var one = 1;
var one_again = 1;
var one_string = "1";  // note: this is string

console.log(one ==  one_again);  // true
console.log(one === one_again);  // true
console.log(one ==  one_string); // true. See below for explanation.
console.log(one === one_string); // false. See below for explanation.
