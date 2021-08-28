const sumAll = function(int1, int2) {

let smallerNumber;
let biggerNumber;
const array1 = [];

/* checks if parameters are numbers and returns error if not */
if ( typeof int1  !== "number" || typeof int2 !== "number" ) {
    return ("ERROR");
};

/* returns error if parameter is negative */
if (int1 < 0 || int2 < 0) {
    return ("ERROR");
};

/*sorts the input parameters in smaller and bigger number */
if (int1 < int2) {
    smallerNumber = int1;
    biggerNumber = int2;
} else {
    smallerNumber = int2;
    biggerNumber = int1;
}

/*pushes every number between the smallerNumber and the biggerNumber to array1 */
for (let i = smallerNumber; i <= biggerNumber; i++) {
    array1.push(i);
}

/* adds the current value (=accumulator; the "result" of the current "operation") to the value (=number) of the current item in the array.
1,2,3,4 = (0+1) > (1+2) > (3+3) > (6+4) =10 */  
const reducer = (accumulator, currentValue) => accumulator + currentValue;

return array1.reduce(reducer);


};

