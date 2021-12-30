const getTheTitles = function(books) {

    const titlesOnly = books.map(_book => _book.title); //_book is a placeholder for the current argument that is passed in the (arrow-) function
    return titlesOnly;
};

module.exports = getTheTitles;
