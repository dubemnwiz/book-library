const shelf = document.getElementById('shelf');

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

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}

document.addEventListener("DOMContentLoaded", () => {
    for (const book of myLibrary) {
        const newBook = document.createElement("div");
        newBook.textContent = book.title;
        newBook.classList.add('book');
        shelf.appendChild(newBook);
    }
});

