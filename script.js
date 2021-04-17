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
    resetDisplay();
    reloadDisplay();
    // addBookToDom(myLibrary[myLibrary.length-1]);

    }


const bookShelf = document.getElementById("book-shelf");
function addBookToDom(bookElement,bookIndex){
    const bookName = bookElement["bookName"];
    const bookAuthor = bookElement["bookAuthor"];
    const bookPages = bookElement["bookPages"];
    const bookStatus = bookElement["bookStatus"];
    const delBtn = document.createElement("button");
    delBtn.classList.add("del-btn","lib-btn");
  
    delBtn.innerText = "Delete";
    const statusBtn = document.createElement("button");
    statusBtn.classList.add("status-btn","lib-btn");
  
    if(bookStatus){
        statusBtn.innerText = "Already Read";
        statusBtn.classList.add("status-btn","lib-btn");
    }
    else{
        statusBtn.innerText = "Not Read";
        statusBtn.style.background  = "#f4f9f9";
        statusBtn.style.color = "#000000";
    }
        


    const colDiv = document.createElement("div");
    colDiv.classList.add("col-lg-3", "col-md-6" ,"col-sm-12","p-5","book-card");
    colDiv.dataset.index = bookIndex;
    const bookInfoDiv = document.createElement("div");
    bookInfoDiv.classList.add("book-info", "my-2" ,"py-3","border-blk");
    const bookNameDiv  = document.createElement("div");
    bookNameDiv.innerText = `${bookName}`;
    const bookAuthorDiv  = document.createElement("div");
    bookAuthorDiv.innerText = `${bookAuthor}`;
    const bookPagesDiv  = document.createElement("div");
    bookPagesDiv.innerText = `${bookPages}`;
    // const bookStatusDiv  = document.createElement("div");
    bookInfoDiv.append(bookNameDiv,bookAuthorDiv,bookPagesDiv,delBtn,statusBtn);
    colDiv.appendChild(bookInfoDiv);
    bookShelf.appendChild(colDiv);
    colDiv.addEventListener("click",handleBtnClick)
    
}


function reloadDisplay(){
    resetDisplay();
    myLibrary.forEach((element,index) => {
        addBookToDom(element,index);
        
        
    });
}



function resetDisplay(){
    bookShelf.innerHTML = "";
}


function handleBtnClick(ev){
    if([...(ev.target.classList)].includes("del-btn")){
        let discardIndex = +(ev.target.parentNode.parentNode.getAttribute("data-index"));
        myLibrary.splice(discardIndex,1);
        reloadDisplay();
       
    }
    else if([...(ev.target.classList)].includes("status-btn")){
        let statusIndex = +(ev.target.parentNode.parentNode.getAttribute("data-index"));
        myLibrary[statusIndex]["bookStatus"] = !myLibrary[statusIndex]["bookStatus"];
        reloadDisplay();
       
    }

}



