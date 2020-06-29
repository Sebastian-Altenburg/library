
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

//
let tableWhole = document.querySelector("table");
let checkBox = document.querySelector("#checkbox");


/////// Store the typedin values from the form to the array
addButton.addEventListener("click", ()=>{

  let titleValue = titleInput.value;
  let authorValue = authorInput.value;
  let pagesValue = pagesInput.value;

  let checkBoxValue;
  if (checkBox.checked == true) {
    checkBoxValue = true;
  }
  else if (checkBox.checked == false) {
    checkBoxValue = false;
  }

  addBookToLibrary(titleValue, authorValue, pagesValue, checkBoxValue); 
  
});


function addBookToLibrary(title, author, pages, alreadyRead) {

  let newBook = new Book(title, author, pages, alreadyRead);
  myLibrary.push(newBook);
  renderNew(newBook);
}


// Create tableRows and tableData + deleteButton
function renderNew(element) {

  let itemIndex = myLibrary.indexOf(element);

  let tableRow = document.createElement("tr");
  tableRow.setAttribute("data-index", `${itemIndex}`);
  tableWhole.appendChild(tableRow);

  for(j = 0; j< 5; j++ ){
    let tableData = document.createElement("td");
    tableRow.appendChild(tableData);

  }

  for(i = 0; i < myLibrary.length; i++ ){
    tableWhole.children[i+2].children[0].innerHTML = myLibrary[i].title;
    tableWhole.children[i+2].children[1].innerHTML = myLibrary[i].author;
    tableWhole.children[i+2].children[2].innerHTML = myLibrary[i].pages;
    tableWhole.children[i+2].children[3].innerHTML = myLibrary[i].alreadyRead;
  }
}