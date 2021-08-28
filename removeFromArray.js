const removeFromArray = function(...args) {

    const array = args[0]; /* creates Array from the fist argument (=the inserted array) */
    const newArray = [];
    array.forEach((item) = function(item) { /*goes through each item in the array and calls a function */
        if (!args.includes(item)) { /*if the item is not included in the arguments of the function */
            newArray.push(item); /* push the item to newArray */
        }
    } );
    return newArray;

};
