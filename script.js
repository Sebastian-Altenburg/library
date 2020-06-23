
//// Array
let myLibrary = [];

//////// Constructor
function Book(title, author, pages, alreadyRead){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.alreadyRead = alreadyRead;
}

//// Selectors ////////////////////////////////////

//Form
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");

//Buttons
let addButton = document.querySelector("#add");
let resetButton = document.querySelector("#reset");

let tableWhole = document.querySelector("table");
let checkBox = document.querySelector("#checkbox");


/////// Store the typedin values from the form to the array
addButton.addEventListener("click", ()=>{
  titleValue = titleInput.value;
  authorValue = authorInput.value;
  pagesValue = pagesInput.value;

  let checkBoxValue;
  if (checkBox.checked == true) {
    checkBoxValue = true;
  }
  else if (checkBox.checked == false) {
    checkBoxValue = false;
  }

  addBookToLibrary(new Book(titleValue, authorValue, pagesValue, checkBoxValue)); 
});


function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}
