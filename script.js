
// Array
let myLibrary = new Array();

// Prototype function array, deleting empty entries
// Array.prototype.clean = function(deleteValue) {
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] == deleteValue) {         
//       this.splice(i, 1);
//       i--;
//     }
//   }
//   return this;
// };

// Constructor
function Book(title, author, pages, alreadyRead){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.alreadyRead = alreadyRead;
}

//// Selectors ////////////////////////

//Form
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");

//Buttons
let addButton = document.querySelector("#add");
let resetButton = document.querySelector("#reset");
let submitButton = document.querySelector("#submit");

//
let tableWhole = document.querySelector("table");
let formWhole = document.querySelector("form");
let body = document.querySelector("body");
let checkBox = document.querySelector("#checkbox");


// open up the form
addButton.addEventListener("click", ()=>{
  formWhole.classList.remove("hide");
  formWhole.classList.add("show");
});
// Store the typedin values from the form to the array
submitButton.addEventListener("click", ()=>{
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

  let tableRow = document.createElement("tr");
  let itemIndex = myLibrary.indexOf(element);
  tableRow.setAttribute("data-index", `${itemIndex}`);
  tableWhole.appendChild(tableRow);

  for (let key in element) {
    let tableData = document.createElement("td");
    tableData.textContent = element[key];
    tableRow.appendChild(tableData);
  } 

// Delete single entry
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "delButton");
  tableRow.appendChild(deleteButton);


  deleteButton.addEventListener("click", () => {

    let rowIndex = document.querySelector(`[data-index="${itemIndex}"]`);
    tableWhole.removeChild(rowIndex);
    delete myLibrary[itemIndex];

    // myLibrary.clean(null);

  });
}

// Reset Button
resetButton.addEventListener("click", ()=> {

  location.reload();

});

// close form window
body.addEventListener('click', () => {
  if(isHidden(formWhole) == false) {
      if (!formWhole.contains(event.target) && 
              event.target !== addButton) {
                formWhole.classList.remove('show');
                formWhole.classList.add('hide');
      }
  }
});

function isHidden(e) {
  return e.offsetParent == null;
}