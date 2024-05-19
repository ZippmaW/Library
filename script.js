"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const showDial = document.getElementById("new-book");
  const dialog = document.getElementById("dialog");
  const closeDial = document.getElementById("close");
  const submitForm = document.getElementById("submit");
  const authorInput = document.getElementById("author");
  const titleInput = document.getElementById("title");
  const pagesInput = document.getElementById("pages");
  const checkboxInput = document.getElementById("checkbox");
  const formDiv = document.getElementById("form");

  showDial.addEventListener("click", () => {
    dialog.showModal();
  });

  closeDial.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });

  submitForm.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(
      authorInput.value,
      titleInput.value,
      pagesInput.value,
      checkboxInput.checked ? "read" : "not read"
    );

    displayBooks();
    formDiv.reset();
    dialog.close();
  });
});

const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  myLibrary.push(new Book(author, title, pages, read));
}

function displayBooks() {
  const libraryDiv = document.getElementById("library");
  const bookHTML = myLibrary
    .map((book) => {
      return `
    <div class="book">
      <fieldset>
        <p>Author: ${book.author}</p>
        <p>Title: ${book.title}</p>
        <p>Pages: ${book.pages}</p>
        <pStatus>: ${book.read}</pStatus>
      </fieldset>
    </div>
    `;
    })
    .join("");
  libraryDiv.innerHTML = bookHTML;
}
