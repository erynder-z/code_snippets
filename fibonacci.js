const fibonacci = function(fibNum) {

const fibArray = [0, 1];

let numberA = fibArray[fibArray.length -2];
let numberB = fibArray[fibArray.length -1];
let nextNumber;

for (let i = 1; i < fibNum; i++) {
    nextNumber = numberA + numberB;
    numberA = numberB;
    numberB = nextNumber;
    fibArray.push(nextNumber);
}
// simpler Version of abote loop
// const fibArray = [0, 1];
// for (i = 2; i <= fibNum; i++) {
//     fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
// }

if (fibNum <= 0) {
    return "OOPS"
} else {
return fibArray[fibArray.length-1];
}


};

module.exports = fibonacci;
