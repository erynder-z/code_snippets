const palindromes = function (string) {

//.replace(/,/g, "") replaces all commas in string with "")
let myString = string.replace("!", "").replace(".", "").replace(/,/g, ""). replace(/ /g, "");

const forwardString = myString.toLowerCase();

function reverse(myString){
    return myString.split("").reverse().join("");
}

const backwardString = reverse(myString.toLowerCase());

if (forwardString === backwardString) {
    return true;
} else {
    return false;
}
};

module.exports = palindromes;
