// Create the Library Array
let library = [];

// Add Books to the Library
library.push({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  yearPublished: 1925,
  available: true,
});
library.push({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  yearPublished: 1960,
  available: true,
});
library.push({
  title: "1984",
  author: "George Orwell",
  yearPublished: 1949,
  available: false,
});
library.push({
  title: "Pride and Prejudice",
  author: "Jane Austen",
  yearPublished: 1813,
  available: true,
});

// Update the Availability of a Book
for (let book of library) {
  if (book.title === "1984") {
    book.available = true;
    break;
  }
}

// Remove a Book from the Library
let indexToRemove = library.findIndex(
  (book) => book.title === "Pride and Prejudice"
);
if (indexToRemove !== -1) {
  library.splice(indexToRemove, 1);
}

//Check if a Book is in the Library
let titles = library.map((book) => book.title);
let isInLibrary = titles.includes("The Great Gatsby");
console.log(isInLibrary); // Should output: true

//   Borrow the First Book
let borrowedBook = library.shift();
borrowedBook.available = false;
console.log(borrowedBook);

// Add a New Book to the Start of the Library
library.unshift({
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  yearPublished: 1951,
  available: true,
});

// Get a List of All Book Titles
let allTitles = library.map((book) => book.title).join(", ");
console.log(allTitles);

// Create a New Library Section
let newArrivals = library.slice(-2);
console.log(newArrivals);

//Putting It All Together
let library = [];

library.push({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  yearPublished: 1925,
  available: true,
});
library.push({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  yearPublished: 1960,
  available: true,
});
library.push({
  title: "1984",
  author: "George Orwell",
  yearPublished: 1949,
  available: false,
});
library.push({
  title: "Pride and Prejudice",
  author: "Jane Austen",
  yearPublished: 1813,
  available: true,
});

for (let book of library) {
  if (book.title === "1984") {
    book.available = true;
    break;
  }
}

let indexToRemove = library.findIndex(
  (book) => book.title === "Pride and Prejudice"
);
if (indexToRemove !== -1) {
  library.splice(indexToRemove, 1);
}

let titles = library.map((book) => book.title);
let isInLibrary = titles.includes("The Great Gatsby");
console.log(isInLibrary); // Should output: true

let borrowedBook = library.shift();
borrowedBook.available = false;
console.log(borrowedBook);

library.unshift({
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  yearPublished: 1951,
  available: true,
});

let allTitles = library.map((book) => book.title).join(", ");
console.log(allTitles);

let newArrivals = library.slice(-2);
console.log(newArrivals);
