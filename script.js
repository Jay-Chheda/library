// an array to store the books objects
let myLibrary = [];

// book constructor
function Book(bookName,bookAuthor,bookPages,bookStatus){
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookPages = bookPages;
    this.bookStatus = bookStatus;

}

//function to add book to array
function addBookToLibrary(name,author,pages,status){
    const book = new Book(name,author,pages,status);
    myLibrary.push(book);
    

}