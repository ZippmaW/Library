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
addBookToLibrary("Kevinus", "Lajfer", "1331", "not read");
addBookToLibrary("Kevinas", "Lajfas", "1333", "not read");
addBookToLibrary("Kevinur", "Lajfur", "1335", "not read");

displayBooks();
