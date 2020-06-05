
/// Global Variables//
let myLibrary=[];
let addButton = document.querySelector("button");
let deleteButton;
///////////////////

// Selectors for parent Divs
let parentTitle = document.querySelector(".gridTitle");
let parentAuthor = document.querySelector(".gridAuthor");
let parentPages = document.querySelector(".gridPages");
let parentAlreadyRead = document.querySelector(".gridRead");
let parentDeleteButton = document.querySelector(".parentDelete");
///////////////////////////
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
////////////////////////
addButton.addEventListener("click", ()=> {
    //Pick input values and push them into the library Array
    let bookTitle = document.getElementsByClassName("bookTitle")[0].value;
    let bookAuthor = document.getElementsByClassName("bookAuthor")[0].value;
    let bookPages = document.getElementsByClassName("bookPages")[0].value;
    addBookToLibrary(new Book(bookTitle, bookAuthor, bookPages));
    ///////////////////
 
////////Create different children for the Books
    for (let key in myLibrary) {
        let childTitle = document.createElement("div");
        parentTitle.appendChild(childTitle);
        render(myLibrary[key].title, childTitle);
        
        let childAuthor = document.createElement("div");
        parentAuthor.appendChild(childAuthor);
        render(myLibrary[key].author, childAuthor);
        
        let childPages = document.createElement("div");
        parentPages.appendChild(childPages);
        render(myLibrary[key].pages, childPages);

        let childAlreadyRead = document.createElement("div");
        let checkboxRead = document.createElement("INPUT");
        parentAlreadyRead.appendChild(childAlreadyRead);
        childAlreadyRead.appendChild(checkboxRead);
        checkboxRead.setAttribute("type", "checkbox");
        checkboxRead.classList.add("checkboxSize");

        let childDelete = document.createElement("div");
        deleteButton = document.createElement("input");
        deleteButton.setAttribute("type", "button");
        deleteButton.classList.add("childDeleteButton");

        parentDeleteButton.appendChild(childDelete);
        childDelete.appendChild(deleteButton);
    }
    removeDivs();
});
function addBookToLibrary(addBook) {
    myLibrary.push(addBook);
}
function removeDivs() {
    if (parentTitle.hasChildNodes()) {
        for(i = 1; i < parentTitle.children.length; i++) {
            parentTitle.removeChild(parentTitle.children[i]);
            parentAuthor.removeChild(parentAuthor.children[i]);
            parentPages.removeChild(parentPages.children[i]);
            parentAlreadyRead.removeChild(parentAlreadyRead.children[i]);
            parentDeleteButton.removeChild(parentDeleteButton.children[i]);
        }
    }
}
function render(template, node) {
    if (!node) return;
    node.innerHTML = template;
}




/// Need to be implemented!!!!///////////////////////////////////////////////////////////////////


/////////////Delete book
// deleteButton.addEventListener("click", ()=> {

// });
//////////////////////

   //Check if you read the book
/* <input class="checkboxRead" type="checkbox"></input> */
    // if (checkBox.checked == true) {
    //     alreadyRead = true;
    // }else if (checkBox.checked == false){
    //     alreadyRead = false;
    // }



/////////////////////////////////////////////////////////////////////////////////////////////