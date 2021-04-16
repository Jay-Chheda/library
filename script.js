// an array to store the books objects
let myLibrary = [];
const newBookForm = document.getElementById("add-bk-form");
const modalCloseBtn = document.getElementById("modal-close");

// book constructor
function Book(bookName,bookAuthor,bookPages,bookStatus){
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookPages = bookPages;
    this.bookStatus = bookStatus;

}

newBookForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let bookName = formData.get('book-name');
    console.log(bookName);
    let bookAuthor = formData.get('book-author');
    console.log(bookAuthor);
    let bookPages = formData.get('book-pages');
    console.log(bookPages);
    let bookStatus = formData.get('book-status');
    bookStatus = bookStatus? true:false;
    console.log(bookStatus);
    addBookToLibrary(bookName,bookAuthor,bookPages,bookStatus);



  
    e.target.reset();
    modalCloseBtn.click();

})



//function to add book to array
function addBookToLibrary(name,author,pages,status){
    const book = new Book(name,author,pages,status);
    myLibrary.push(book);
    console.log(myLibrary);
    

}