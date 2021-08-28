const leapYears = function(year) {

let check1;
let check2;
let check3;

if (year % 4 == 0) {
    check1 = true;
};


if (year % 100 == 0) {
    check2 = true;
};

if (year % 400 == 0) {
    check3 = true;
};

if (check1 == true && check2 != true && check3 != true) {
    return true;
} else if (check1 != true && check2 != true && check3 == true) {
    return true;
} else if (check1 == true && check2 == true && check3 == true) {
    return true;
} else {
    return false;
};


};


