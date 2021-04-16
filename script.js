// an array to store the books objects
let myLibrary = [
    {
    bookName: "game of thornes",
    bookAuthor: "grrm",
    bookPages: "42454",
    bookStatus: true
    },

    {
        bookName: "2hornes",
        bookAuthor: "grrm",
        bookPages: "42454",
        bookStatus: true
        }
    ];

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
    
    let bookAuthor = formData.get('book-author');
  
    let bookPages = formData.get('book-pages');
   
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
    // console.log(myLibrary);
    console.log(myLibrary[myLibrary.length-1]);
    addBookToDom(myLibrary[myLibrary.length-1]);

    }


const bookShelf = document.getElementById("book-shelf");
function addBookToDom(bookElement){
    const bookName = bookElement["bookName"];
    const bookAuthor = bookElement["bookAuthor"];
    const bookPages = bookElement["bookPages"];
    const bookStatus = bookElement["bookStatus"];

    const colDiv = document.createElement("div");
    colDiv.classList.add("col-lg-3", "col-md-6" ,"col-sm-12");
    const bookInfoDiv = document.createElement("div");
    bookInfoDiv.classList.add("book-info", "my-2" ,"py-3","border-blk");
    const bookNameDiv  = document.createElement("div");
    bookNameDiv.innerText = `${bookName}`;
    const bookAuthorDiv  = document.createElement("div");
    bookAuthorDiv.innerText = `${bookAuthor}`;
    const bookPagesDiv  = document.createElement("div");
    bookPagesDiv.innerText = `${bookPages}`;
    const bookStatusDiv  = document.createElement("div");
    bookStatusDiv.innerText = `${bookStatus}`;
    bookInfoDiv.append(bookNameDiv,bookAuthorDiv,bookPagesDiv,bookStatusDiv);
    colDiv.appendChild(bookInfoDiv);
    bookShelf.appendChild(colDiv);
}


function reloadDisplay(){
    myLibrary.forEach(element => {
        addBookToDom(element);
        
    });
}

reloadDisplay();
