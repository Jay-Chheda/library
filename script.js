const bookArray = [];
const modalButton = document.getElementById("modal-open");
const modal = document.getElementById("my-modal");
const bookList = document.getElementById("book-list");

const bookForm = document.getElementById("book-form");

modalButton.addEventListener('click',(e)=>{
      modal.style.display = "block";

  

});

window.addEventListener('click',(e)=>{
    if(e.target === modal){
       
        modal.style.display = "none";
    }
});

bookForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formData = new FormData(bookForm);
    const bookName = formData.get('book-name');
    const bookAutor = formData.get('book-author');
    const bookPages = formData.get('book-pages');
    let bookStatus =formData.get('book-status');
    if(bookStatus){
        bookStatus = true;
    }
    else{
        bookStatus = false;
    }
    const newBook = {
        bookName,
        bookAutor,
        bookPages,
        bookStatus
    }
    console.log(newBook);
    bookArray.push(newBook);
    e.target.reset();
    modal.click();
    displayBooks();

    
 
})


const displayBooks = ()=>{
    bookArray.forEach(book=>{
        const bookName = book['bookName'];
        const newBook = document.createElement('li');
        newBook.innerText = `${bookName}`;
        bookList.appendChild(newBook);

        
    })
}