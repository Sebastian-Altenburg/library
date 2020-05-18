
/// Global Variables
let wholeContainer = document.querySelector(".wholeContainer");

let myLibrary=[];
let addButton = document.querySelector("button");

let parentTitle = document.querySelector(".gridTitle");
let parentAuthor = document.querySelector(".gridAuthor");
let parentPages = document.querySelector(".gridPages");
let checkBox = document.querySelector(".checkboxRead");
///

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

/// Check if you read the book////
// if (checkBox.checked == true) {
    
// }else{
    
// }


//////////////////////
addButton.addEventListener("click", ()=> {
    let bookTitle = document.getElementsByClassName("bookTitle")[0].value;
    let bookAuthor = document.getElementsByClassName("bookAuthor")[0].value;
    let bookPages = document.getElementsByClassName("bookPages")[0].value;

    addBookToLibrary(new Book(bookTitle, bookAuthor, bookPages));

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
    }
    removeDivs();
    
});

function addBookToLibrary(addBook) {
    myLibrary.push(addBook);
}
function removeDivs() {
    if (parentTitle.hasChildNodes()) {
        console.log("hi");
        for(i = 0; i < parentTitle.children.length; i++) {
            parentTitle.removeChild(parentTitle.children[i]);
            parentAuthor.removeChild(parentAuthor.children[i]);
            parentPages.removeChild(parentPages.children[i]);
        }
    }
}
function render(template, node) {
    if (!node) return;
    node.innerHTML = template;
}






