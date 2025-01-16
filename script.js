function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        return `${title} by ${author} is ${pages} long.`
    };
    this.isRead = isRead;
}

const harry = new Book('Harry Potter', 'J.K Rowling', 560, false);
const diary = new Book('Diary of a Wimpy Kid', 'Jeff Kinney', 240, false);

const myLibrary = [harry, diary];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        return `${title} by ${author} is ${pages} long.`
    };
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}

const shelf = document.getElementById('shelf');

for (const book of myLibrary) {
    const newBook = document.createElement("div");
    newBook.textContent = book.title;
    shelf.appendChild(newBook);
}