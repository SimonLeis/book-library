"use strict";

// get the data from the input make it a object via object constructors and make the input work

// variables
const addButton = document.querySelector(".addBook");
const authorInput = document.querySelector(".bookAuthor");
const titleInput = document.querySelector(".bookTitle");
const pagesInput = document.querySelector(".bookPages");
const formSbmtBtn = document.querySelector(".form > button");
const addBookForm = document.querySelector(".addBookForm");
const readCheckBox = document.querySelector(".readCheckBox");

let bookList = [];

//object constructor
function Book(author, title, pages, read) {
  (this.author = author),
    (this.title = title),
    (this.pages = pages),
    (this.read = read);
}

//input visually working

// function to create the book entry that appends in the list
const createBookEntry = (object) => {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");

  const author = document.createElement("p");
  author.innerText = object.author;
  author.classList.add("author");
  const authorSpan = document.createElement("span");
  authorSpan.innerText = "Author : ";
  author.prepend(authorSpan);

  const title = document.createElement("p");
  title.innerText = object.title;
  title.classList.add("title");
  const titleSpan = document.createElement("span");
  titleSpan.innerText = "Title : ";
  title.prepend(titleSpan);

  const pages = document.createElement("p");
  pages.innerText = object.pages;
  pages.classList.add("pages");
  const pagesSpan = document.createElement("span");
  pagesSpan.innerText = "Pages : ";
  pages.prepend(pagesSpan);

  document.querySelector(".bookList").appendChild(bookCard);
  bookCard.appendChild(author);
  bookCard.appendChild(title);
  bookCard.appendChild(pages);

  if (object.read) {
    const read = document.createElement("div");
    read.classList.add("readButton");
    read.classList.add("read");
    read.innerText = "already read";
    bookCard.append(read);
  } else if (!object.read) {
    const notRead = document.createElement("div");
    notRead.classList.add("readButton");
    notRead.classList.add("notRead");
    notRead.innerText = "not read";
    bookCard.append(notRead);
  }
};

const addBookEntries = (array) => {
  document
    .querySelector("main")
    .removeChild(document.querySelector(".bookList"));

  let bookList = document.createElement("div");
  bookList.classList.add("bookList");

  document.querySelector("main").appendChild(bookList);

  array.forEach((element) => {
    createBookEntry(element);
  });
};

// button toggle to read and unread

document.addEventListener("click", (e) => {
  switch (e.target.classList[1]) {
    case "notRead":
      e.target.classList.toggle("notRead");
      e.target.classList.toggle("read");
      e.target.innerText = "read";
      let titleComparisonNotRead =
        e.target.parentNode.querySelector(".title").innerText;

      for (let index = 0; index < bookList.length; index++) {
        const element = bookList[index];

        if (element.title == titleComparisonNotRead.slice(8)) {
          element.read = true;
        }
      }

      break;

    case "read":
      e.target.classList.toggle("notRead");
      e.target.classList.toggle("read");
      e.target.innerText = "not read";

      let titleComparisonRead =
        e.target.parentNode.querySelector(".title").innerText;

      for (let index = 0; index < bookList.length; index++) {
        const element = bookList[index];

        if (element.title == titleComparisonRead.slice(8)) {
          element.read = false;
        }
      }

    default:
      break;
  }
});

addButton.addEventListener("click", () => {
  addBookForm.classList.toggle("invisible");
});

formSbmtBtn.addEventListener("click", () => {
  addBookForm.classList.toggle("invisible");

  bookList.push(
    (titleInput.value = new Book(
      authorInput.value,
      titleInput.value,
      pagesInput.value,
      readCheckBox.checked ? true : false
    ))
  );

  addBookEntries(bookList);
});

//button should turn red

//objects properties within the array should be updated
