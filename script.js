const shelf = document.getElementById('shelf');

class Book {

    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    info() {
        return `${title} by ${author} is ${pages} long.`;
    };

};

const harry = new Book('Harry Potter', 'J.K Rowling', 560, false);
const diary = new Book('Diary of a Wimpy Kid', 'Jeff Kinney', 240, false);

const myLibrary = [harry, diary];

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    displayBooks();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function displayBooks() {
    shelf.innerHTML = '';

    // Loop through the library and display each book
    myLibrary.forEach((book, index) => {
        const newBook = document.createElement('div');
        const removeBtn = document.createElement('button');
        const bookText = document.createElement('div');

        // Set up book details
        bookText.textContent = `${book.title}`;

        // Set up the remove button
        removeBtn.textContent = 'X';
        removeBtn.setAttribute('data-index', index);
        removeBtn.addEventListener('click', (e) => {
            const bookIndex = e.target.getAttribute('data-index');
            removeBook(bookIndex);
        });

        // Add classes and append elements
        newBook.classList.add('book');
        newBook.appendChild(bookText);
        newBook.appendChild(removeBtn);
        shelf.appendChild(newBook);
    });
}

// Event listener for adding books
const addBtn = document.getElementById('addBookBtn');
const bookForm = document.getElementById('bookDialog');
const submit = document.getElementById('submit');

addBtn.addEventListener('click', () => {
    bookForm.show();
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('hasBeenRead').checked; // Use `.checked` for checkbox input
    if (title.validity.valueMissing || author.validity.valueMissing || pages.validity.valueMissing) {
        submit.setCustomValidity("Fill all book info!");
    } else {
        submit.setCustomValidity("");
    }
    addBookToLibrary(title, author, pages, read);
    bookForm.close();
    bookForm.reset(); // Reset the form for the next entry
});

// Initial display of books
displayBooks();
