const reverseString = function(str) {


    let splitArray = str.split("");
    splitArray.reverse("");
    const arrayToString = splitArray.join("");
    str = arrayToString;
    return str;
};


