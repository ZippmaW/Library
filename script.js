"use strict";

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
  myLibrary.map((item) => console.table(item));
}

addBookToLibrary("Kevin", "Lajf", "1337", "not read");
addBookToLibrary("Kevin1", "Lajf1", "1331", "not read");
addBookToLibrary("Kevin2", "Lajf2", "1333", "not read");
addBookToLibrary("Kevin3", "Lajf3", "1335", "not read");

displayBooks();
